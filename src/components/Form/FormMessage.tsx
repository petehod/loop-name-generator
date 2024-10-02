export const FormMessage = ({
  message,
  type = "success"
}: {
  message: string;
  type?: "success" | "error";
}) => {
  return (
    <p
      className={` text-sm font-semibold mt-4 ${
        type === "error" ? "text-red" : "text-white"
      }`}
    >
      {message}
    </p>
  );
};
