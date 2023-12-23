export default async function Footer() {
  return (
    <div>
      <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
        <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
        <div className="flex items-center mx-auto text-gray-600 container justify-center md:justify-between py-2">
          <div>
            <span className="font-normal">
              © Copyright 2023, All Rights Reserved{' '}
            </span>
          </div>
          <a
            className="items-center gap-2 hidden md:flex"
            href="https://github.com/dhommen/dhommen.github.io"
            rel="noopener noreferrer"
          >
            <span className="hover:underline focus-visible:underline">
              Version: 1.1.2
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
