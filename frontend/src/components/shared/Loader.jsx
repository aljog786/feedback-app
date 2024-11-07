import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <>
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="danger" />
    </>
  )
}
export default Loader