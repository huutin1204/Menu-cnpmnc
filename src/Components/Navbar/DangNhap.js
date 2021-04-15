import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h2>Đăng nhập tài khoản</h2> <br />
    <Form
    
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h4>Email hoặc số di động</h4>
      <Form.Item style={{width: '250px'}}
        // label="Email hoặc số di động"
        name="username"
        rules={[
          {
            required: true,
            message: 'Hãy Nhập Email hoặc số di động!',
          },
        ]}
      >
        <Input style={{width: '220px'}} />
      </Form.Item>

        <h4>Mật Khẩu</h4>
      <Form.Item
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{width: '220px'}} />
      </Form.Item>

      <Form.Item  name="login" valuePropName="checked" style={{float: 'right', marginLeft: '5px',fontSize:'13px'}}>
      <p>Bạn chưa có tài khoản? <br /><a href="facebook.com">Đăng Ký</a></p>
      
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit" 
        style={{marginRight:'20px', marginLeft:'-40px', backgroundColor: '#f96d01',fontSize:'14px',fontWeight:'600'}}>
          Đăng Nhập
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Demo;