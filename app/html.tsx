import type { ReactNode } from "react"

export default function Html({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* DOCTYPE declaration should be outside the html tag */}\
      <!DOCTYPE html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="John Doe's Portfolio - Computer Science Student and Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>John Doe | Portfolio</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

