import React from 'react';
import classNames from 'classnames';
import { GoPeople } from 'react-icons/go';
import { IoSearchSharp } from 'react-icons/io5';
import { FaArrowRight, FaPlus } from 'react-icons/fa6';
import { Button, Card, Divider, Input, Layout, Space, Typography } from 'antd';
import styles from './LobbyPage.module.scss';
import { NavLink } from 'react-router';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const LobbyPage: React.FC = () => {
    return (
        <Content
            className={classNames(
                'flex justify-center max-w-[400px]  mx-auto items-center h-[100vh] text-2xl',
                styles.container,
            )}
        >
            <Card className="w-full">
                <Space direction="vertical" className="!w-full">
                    <Space
                        align="center"
                        direction="vertical"
                        className="!w-full"
                    >
                        <Space className="p-3 bg-[#E5E5E7] rounded-full">
                            <GoPeople size={20} />
                        </Space>
                        <Title level={5} style={{ margin: 0 }}>
                            Voice Chat
                        </Title>
                        <Paragraph>
                            Join a voice chat room or create your own
                        </Paragraph>
                    </Space>
                    <Space direction="vertical" size={0} className="!w-full">
                        <Text className="!text-[12px] font-bold">
                            Your name
                        </Text>
                        <Input id="name" placeholder="Enter your name" />
                    </Space>
                </Space>
                <Divider />

                <Button className="!w-full">
                    <Space>
                        <IoSearchSharp />
                    </Space>
                    <NavLink to={"/rooms"}>Browse all rooms</NavLink>
                </Button>

                <Divider plain>or</Divider>

                <Space direction="vertical" className="w-full">
                    <Space direction="vertical" className="w-full">
                        <Text className="!text-[12px] font-bold">
                            Room Code
                        </Text>
                        <Input id="room_code" placeholder="Enter room code" />
                    </Space>
                    <Space direction="vertical" className="!w-full">
                        <Button className="!w-full">
                            Join Room
                            <Space>
                                <FaArrowRight />
                            </Space>
                        </Button>
                    </Space>
                </Space>

                <Divider plain>or</Divider>

                <Button className="!w-full">
                    <Space>
                        <FaPlus />
                    </Space>
                    Create New Room
                </Button>

                <Paragraph className="text-center !text-[13px] mt-2 !text-[gray]">
                    Up to 4 participants per room
                </Paragraph>
                <Paragraph className="text-center !text-[11px]  !text-[gray]">
                    Note: Room codes are 6 characters long
                </Paragraph>
            </Card>
        </Content>
    );
};

export default LobbyPage;
