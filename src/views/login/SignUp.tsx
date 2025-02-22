import type { FormProps } from 'antd'
import {
  LockOutlined,
  UserOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { LoginProps } from './'
import { useNavigate } from 'react-router-dom'
import { register } from '@/apis/user'
type FieldType = {
  email: string
  password: string
  username: string
}

export default function SignIn({ funcParent }: LoginProps) {
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const params = {
        email: values.email,
        password: values.password,
        username: values.username,
      }
      const response = await register(params)
      localStorage.setItem('token', response.token)
      message.success('sign up success!')
      navigate('/home', { state: values })
    } catch (err) {
      message.error('sign up failed!')
      return err
    }
  }
  const handleClickSignIn = () => {
    funcParent('in')
  }
  return (
    <Form name="login" style={{ maxWidth: 360 }} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<CloudUploadOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Sign Up
        </Button>
        or
        <Button color="default" variant="link" onClick={handleClickSignIn}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
}
