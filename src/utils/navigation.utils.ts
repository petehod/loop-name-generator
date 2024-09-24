export function shouldHideLoginLogoutButton(path: string) {
  return path === "/login" || path === "/signup";
}
