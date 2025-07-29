import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <div className="bg-secondary p-5 flex flex-row items-center justify-between">
      <span className="text-2xl font-medium">Food ordering system</span>
      <LoginButton />
    </div>
  );
}
