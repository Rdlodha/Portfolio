export default function Footer() {
return(
    <footer className="flex flex-col items-center h-fit mt-20 md:mt-15 gap-2 py-6 text-sm text-gray-400">
    <span className="text-gray-700 w-full">
<hr />
        </span>
  <span>© {new Date().getFullYear()} Rishi Lodha</span>
  <span>Built with React & Vite</span>
</footer>
)

}
