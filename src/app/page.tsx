export default function Home() {
  const scrollContent = Array.from({ length: 20 }, (_, i) => (
    <div key={i} className='p-4 border-b'>
      <h3 className='font-semibold'>Content Block {i + 1}</h3>
      <p className='text-muted-foreground'>
        This is some sample content to demonstrate the scrolling blur effect.
        Scroll down to see the topbar background blur.
      </p>
    </div>
  ));

  return (
    <main className='container mx-auto'>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-4'>Topbar Demo</h1>
        <p className='text-muted-foreground mb-8'>
          Scroll down to see the blur effect. Try the search with Cmd/Ctrl+K
          shortcut!
        </p>
      </div>
      {scrollContent}
    </main>
  );
}
