import Dropdown from 'react-bootstrap/Dropdown';

function DropBtn() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        اللغة
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='text-dark' href="#/action-1">العربية</Dropdown.Item>
        <Dropdown.Item className='text-dark' href="#/action-2">الانجليزية</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropBtn;