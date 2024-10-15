import TitleSubtitle from './TitleSubtitle'
import ImageDisplay from './ImageDisplay'
import ButtonContainer from './ButtonContainer'
import logo from 'assets/Imperial_Brands_logo.svg'
function App() {
  return (
    <div className="p-4">
      <TitleSubtitle
        title="Imperial Unit Testing Example"
        subtitle="Show your skills"
      />

      <ImageDisplay src={logo} alt="Description of the image" />

      <ButtonContainer
        onPrimaryClick={() => alert('Primary button clicked!')}
        onSecondaryClick={() => alert('Secondary button clicked!')}
      />
    </div>
  )
}

export default App
