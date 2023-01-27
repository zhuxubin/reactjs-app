import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Toast } from 'antd-mobile';
import { useStore } from '@/store';

function Login() {
    const navigate = useNavigate();
    const { loginStore } = useStore();
    const onFinish = async (values) => {
        const { mobile, code } = values;
        console.log(values);
        try {
            await loginStore.login({ mobile, code });
            Toast.show({
                icon: 'success',
                content: '保存成功',
            });
            navigate('/', { replace: true });
        } catch (error) {
            Toast.show({
                icon: 'fail',
                content: error.response.data.message,
            });
        }
    };

    const onFinishFailed = (values) => {
        console.log(values);
    };

    return (
        <>
            <Form
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                footer={
                    <Button block type="submit" color="primary" size="large">
                        提交
                    </Button>
                }
                mode="card"
            >
                <Form.Item
                    name="mobile"
                    label="手机号"
                    initialValue="18111111111"
                    rules={[{ required: true, message: '手机号不能为空' }]}
                >
                    <Input placeholder="请输入" value="18111111111" />
                </Form.Item>

                <Form.Item
                    name="code"
                    label="短信验证码"
                    initialValues="246810"
                    rules={[{ required: true, message: '短信验证码不能为空' }]}
                >
                    <Input placeholder="请输入" value="246810" />
                </Form.Item>
            </Form>
        </>
    );
}

export default Login;
