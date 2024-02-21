/**
 * Root layout for csaladihazneked.hu
 * @param children Content of the page. 
 * @returns The root layout with the children nested
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
