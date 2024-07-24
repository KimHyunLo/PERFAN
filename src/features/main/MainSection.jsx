import MainContent from './MainContent'

function MainSection({ children }) {
  return (
    <section>
      {children}
      <MainContent />
    </section>
  )
}

export default MainSection
