import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  // session: {
  //   strategy: 'jwt'
  // },
  providers: [
    CredentialsProvider({
      name: 'My Custom Provider',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email Address', value: '1@o2.pl' },
        password: { label: 'Password', type: 'password', placeholder: 'Password', value: '123456' }
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:3001/login', {
          method: 'POST',
          body: JSON.stringify({user: credentials}),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }
