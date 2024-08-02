export const NameGenerator = ({ name }: { name?: string }) => {
  return (
    <div className="quickie h-screen flex flex-col items-center py-12 px-6 md:px-0 relative">
      <div className="flex flex-col items-center justify-between max-w-24	 bg-white shadow-3xl pt-10 rounded-lg w-full md:w-96 relative">
        <h2 className="text-2.5 font-semibold mb-6 md:mb-4 text-primary">
          Quickie
          {name}
        </h2>

        {/* <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} /> */}

        {/* <LoopFileName loopName={fullLoopName} /> */}
      </div>
    </div>
  );
};
