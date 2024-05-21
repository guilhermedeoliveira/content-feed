import StyledComponentsRegistry from '@/lib/registry'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
