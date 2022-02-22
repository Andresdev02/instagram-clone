import React from 'react'
import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }) {
  if (!providers) return null
  return (
    <>
      <Header />
      <div className="-mt-36 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
        <p className="font-xs italic">
          This is not a real app, it is built for educational purposes only.
        </p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="mt-8 rounded-lg bg-blue-500 p-3 text-white"
              onClick={() =>
                signIntoProvider(provider.id, { callbackUrl: '/' })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
export default signIn
