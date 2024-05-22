import Alert from 'react-bootstrap/Alert';

const Validate = () => {
  return (
    <div className='alert'>
    <Alert variant="success">
      <Alert.Heading>Hey, check your email!</Alert.Heading>
      <p>
       A code has been sent to your email address. Kindly validate to continue.
      </p>
    </Alert>
    </div>
  );
}

export default Validate;