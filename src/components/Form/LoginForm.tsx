// "use client";
// import Link from "next/link";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useCallback, useRef, useState } from "react";
// import { auth } from "../../firebase/firebase-config";
// import { useRouter } from "next/navigation";
// import { HOME } from "@constants/links.constants";
// import { FirebaseError } from "firebase/app";

// import { ButtonLarge } from "@components/Buttons/ButtonLarge";
// import { Input } from "@components/Inputs";
// import { Label } from "@components/Labels";
// import { FormInputLabelWrapper } from "@components/Forms";
// import { User } from "@backend/src/common";

// const emailSchema = User.shape.email;

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const passwordInputRef = useRef<HTMLInputElement>(null);
//   const emailInputRef = useRef<HTMLInputElement>(null);

//   const router = useRouter();

//   const handleFormSubmit = useCallback(
//     async (e: React.SyntheticEvent) => {
//       e.preventDefault();

//       // Validate email
//       const emailValidationResult = emailSchema.safeParse(email);
//       if (!emailValidationResult.success) {
//         setErrorMessage(
//           `Email Error: ${emailValidationResult.error.issues
//             .map((issue) => issue.message)
//             .join(", ")}`
//         );
//         return;
//       }

//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         router.push(HOME);
//       } catch (error) {
//         if (error instanceof FirebaseError) {
//           setErrorMessage(error.message);
//         }
//       }
//     },
//     [router, email, password] // Include email and password in the dependency array
//   );

//   const handleInputFocus = useCallback(() => {
//     // Focus the input ref
//     emailInputRef.current?.focus();
//   }, []);

//   const handlePasswordFocus = useCallback(() => {
//     // Focus the input ref
//     passwordInputRef.current?.focus();
//   }, []);

//   return (
//     <form id="loginForm" onSubmit={handleFormSubmit}>
//       <FormInputLabelWrapper>
//         <Label htmlFor="email" text="Email" />
//         <Input
//           id="email"
//           type="email"
//           required={true}
//           onChange={(e) => setEmail(e.target.value)}
//           onFocus={handleInputFocus}
//           minLength={1}
//           maxLength={20}
//           ref={emailInputRef}
//         />
//       </FormInputLabelWrapper>

//       <FormInputLabelWrapper>
//         <Label htmlFor="password" text="Password" />
//         <Input
//           id="password"
//           type="password"
//           required={true}
//           onChange={(e) => setPassword(e.target.value)}
//           onFocus={handlePasswordFocus}
//           minLength={8}
//           maxLength={20}
//           ref={passwordInputRef}
//         />
//         {errorMessage && (
//           <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
//         )}
//         <Link
//           href={`/reset-password`}
//           className="text-0.875 font-semibold text-primary mt-4 text-center md:text-left"
//         >
//           Forgot password?
//         </Link>
//       </FormInputLabelWrapper>

//       <ButtonLarge type="submit" text="Login" backgroundColor="dark" />
//     </form>
//   );
// }
