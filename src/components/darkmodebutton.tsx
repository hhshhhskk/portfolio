'use client'
import { useTheme } from 'next-themes'

const DarkModeButton: React.FC = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <button
                className="
                inline-flex items-center
              bg-gray-100 dark:bg-slate-700 border-0 py-1 px-3 
              hover:bg-gray-300 hover:dark:bg-white
                focus:outline-none rounded text-base mt-4 md:mt-0"
                type='button'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {/** 라이트 모드 달*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(253 224 71)" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="
                    visible dark:invisible
                    w-6 h-6 dark:w-0
                    text-yellow-300
                    ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                {/** 다크 모드 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(239 68 68)" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="
                    invisible dark:visible
                    w-0 h-6 dark:w-6
                  text-red-500
                    ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>

            </button>
        </>
    );
};

export default DarkModeButton;