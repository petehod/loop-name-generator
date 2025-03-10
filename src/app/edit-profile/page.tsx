"use client";
import withAuth from "@/components/WithAuth";
import { useUser } from "@/context/UserContext";
import { Form, FormInputLabelWrapper, Input, Label } from "@/components/Form";
import { Button } from "@/components/Button";
import { useState } from "react";
import { FirebaseService } from "@/services";
import { TEST_USER_EMAIL } from "@/constants/user.constants";

function EditProfilePage() {
  const { user, userProfile } = useUser();

  const isTestUser = userProfile?.email === TEST_USER_EMAIL;

  const [username, setUsername] = useState(userProfile?.username || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user || !userProfile) return;
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await FirebaseService.updateUserProfile(user?.uid, username, password);
      setSuccess(`Successfully updated profile!`);
    } catch (err) {
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return isTestUser ? (
    <p>You are not allowed to edit the test user details!</p>
  ) : (
    <Form title="Edit profile" onSubmit={handleSubmit}>
      <>
        <FormInputLabelWrapper
          label={<Label htmlFor="username" text="Username" />}
          input={
            <Input
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter new username"
              minLength={1}
              maxLength={20}
            />
          }
        />
        <FormInputLabelWrapper
          label={<Label htmlFor="password" text="Password" />}
          input={
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              minLength={1}
              maxLength={20}
            />
          }
        />
      </>
      {error && <p className="text-white">{error}</p>}
      {success && <p className="text-white">{success}</p>}

      <Button
        type="submit"
        text={loading ? "Submitting..." : "Submit"}
        disabled={loading}
      />
    </Form>
  );
}

export default withAuth(EditProfilePage);
