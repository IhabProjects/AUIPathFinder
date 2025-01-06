export default function Header() {
  return (
    <header className="bg-[#1A502F] py-4 mb-8 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <img
          src="/aui-logo.png"
          alt="AUI Logo"
          className="h-16"
        />
        <h1 className="text-3xl font-bold text-white text-center flex-1">
          AUIPathFinder
        </h1>
      </div>
    </header>
  );
}
