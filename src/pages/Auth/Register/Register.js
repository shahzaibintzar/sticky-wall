import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Resgister() {
    return (

        <div className="registerDiv">
            <div className="container">
                <div className="row">
                    <div className="col py-5">
                        <div className="card  w-25 p-3 m-auto">
                            <h2 className='text-center py-3 '>Register</h2>
                            <Form layout='vertical'>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item label="Full Name">
                                            <Input placeholder='Full Name' type='text' />
                                        </Form.Item>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item label="Phone No:">
                                            <Input placeholder='Phone No' type='number' />
                                        </Form.Item>
                                    </Col>

                                </Row>
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
                                                Register
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                    <Link style={{textDecoration:"none" }}>I have an account <u>Login</u></Link>

                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
