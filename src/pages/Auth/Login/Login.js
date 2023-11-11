import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (

    <div className="loginDiv">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <div className="card  w-25 p-3 m-auto">
              <h2 className='text-center py-3 '>Login</h2>
              <Form layout='vertical'>
                <Row>
                  <Col span={24}>
                    <Form.Item label="Email:">
                      <Input placeholder='Email' type='email' />
                    </Form.Item>
                  </Col>

                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label="Password">
                      <Input placeholder='Password' type='password' />
                    </Form.Item>
                  </Col>

                </Row>
                <Row>
                  <Col span={12} offset={6}>
                    <Form.Item>
                      <Button type="primary" ghost style={{ width: "100%" }} >
                        Login
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
                <Link >I do't have an account <u>Sign Up</u></Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
