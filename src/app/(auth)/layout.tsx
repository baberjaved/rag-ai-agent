// app/(auth)/login/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
