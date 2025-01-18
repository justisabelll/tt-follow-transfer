export default function Home() {
  return (
    <main className="overscroll-none">
      <div className="sm:min-h-screen text-neutral-800 bg-white">
        <div className="max-w-xl px-4 sm:px-0 mx-auto text-base pt-4">
          <div className="flex items-center justify-between text-neutral-500">
            <div className="text-[#FE2C55] text-lg sm:text-xl font-bold">
              TikSync
            </div>
            <div className="flex gap-3 sm:gap-6 items-center">
              <a
                href="#how"
                className="hover:text-[#FE2C55] text-sm sm:text-base"
              >
                How It Works
              </a>
              <a
                href="#faq"
                className="hover:text-[#FE2C55] text-sm sm:text-base"
              >
                FAQ
              </a>
              <button className="btn btn-primary btn-sm sm:btn-md bg-[#FE2C55] hover:bg-[#FE2C55]/90 border-none text-white">
                Connect
              </button>
            </div>
          </div>

          <div className="py-8 px-4 sm:px-8 sm:pt-12 sm:pb-24">
            <div className="max-w-xl mx-auto sm:pt-12">
              <div className="mb-8">
                <h1 className="text-2xl pb-4">
                  Keep Your TikTok Community Together
                </h1>
                <p className="pb-2 text-base">
                  Follow your favorite creators across all platforms, even if
                  TikTok becomes unavailable.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <button className="btn btn-primary w-full bg-[#FE2C55] hover:bg-[#FE2C55]/90 border-none text-white">
                    Connect with TikTok
                  </button>
                </div>
              </div>

              <div id="how" className="py-8">
                <h2 className="text-xl pb-6">How It Works</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
                  {[
                    'Connect your TikTok account securely',
                    "Discover creators' other platforms",
                    'Follow them everywhere',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-medium flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm pt-1.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="faq" className="py-8">
                <h2 className="text-xl pb-6">FAQ</h2>
                <div className="space-y-6">
                  {[
                    {
                      question: 'Is it safe to log in with my TikTok account?',
                      answer:
                        "Yes! We only see who you follow through TikTok's official OAuth system.",
                    },
                    {
                      question: 'What if TikTok becomes unavailable?',
                      answer:
                        "You'll still be connected with creators on other platforms.",
                    },
                    {
                      question: 'Is TikSync free?',
                      answer: 'Yes, completely free for everyone.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-neutral-100 pb-4">
                      <h3 className="font-medium text-base mb-2">
                        {item.question}
                      </h3>
                      <p className="text-neutral-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 text-xs bg-neutral-50 border-t">
        <div className="max-w-xl mx-auto w-full text-neutral-600 justify-between flex items-center gap-2 flex-wrap">
          <div className="flex gap-2">
            <div>© 2024 TikSync</div>
            <a href="#" className="hover:text-[#FE2C55]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#FE2C55]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
