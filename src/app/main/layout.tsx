import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  rem,
} from "@mantine/core";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: rem(60) }} footer={{ height: rem(60) }}>
      <AppShellHeader></AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
      <AppShellFooter></AppShellFooter>
    </AppShell>
  );
};

export default MainLayout;
