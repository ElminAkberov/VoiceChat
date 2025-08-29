import React from 'react';
import { mockData } from '@/config/mockData';
import RoomCard from '@/components/room/RoomCard';

import {
    Button,
    Col,
    Divider,
    Input,
    Layout,
    Row,
    Select,
    Space,
    Typography,
} from 'antd';

import { FaPlus } from 'react-icons/fa6';
import { TfiReload } from 'react-icons/tfi';
import { BsCircleFill } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';

import { NavLink } from 'react-router';

const { Content } = Layout;
const { Text, Title } = Typography;

const MeetingRooms: React.FC = () => {
    return (
        <Content className="px-3 mt-5">
            <Row justify="space-between" align="middle" className="mb-5">
                <Col>
                    <Space size="middle">
                        <NavLink to={'/'}>
                            <Button
                                type="text"
                                icon={<IoArrowBack size={15} />}
                                className=" !flex !items-center !justify-center !border-0"
                            >
                                <Text className="">Back</Text>
                            </Button>
                        </NavLink>
                        <Space direction="vertical" size={0}>
                            <Title level={4}>Browse Rooms</Title>
                            <Text>
                                Discover and join public voice chat rooms
                            </Text>
                        </Space>
                    </Space>
                </Col>
                <Col>
                    <Button
                        icon={<FaPlus size={13} strokeWidth={1} color="#fff" />}
                        iconPosition="end"
                        className="mt-2 !flex !items-center !justify-center !border-0 !bg-black "
                    >
                        <Text className="!text-white">Create Room</Text>
                    </Button>
                </Col>
            </Row>
            <Row justify="space-between" align="middle" className="mb-3 px-3">
                <Col>
                    <Space size={4} align="center">
                        <BsCircleFill size={8} color="#00C951" />
                        <Text className="!text-[#808080] !text-[13px]">
                            {mockData[0].activeRoomCount} active rooms
                        </Text>
                    </Space>
                </Col>
                <Col>
                    <Text className="!text-[#808080] !text-[13px]">
                        {mockData[0].count} rooms found
                    </Text>
                </Col>
            </Row>
            <Divider></Divider>
            <Row gutter={[10, 10]} align="middle" className="px-3 mb-4">
                <Col flex={1}>
                    <Input placeholder="Search rooms by name, code, or description..." />
                </Col>
                <Col>
                    <Select
                        placeholder="All status"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'Yiminghe' },
                        ]}
                        style={{ minWidth: 120 }}
                    />
                </Col>
                <Col>
                    <Select
                        placeholder="All categories"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'Yiminghe' },
                        ]}
                        style={{ minWidth: 120 }}
                    />
                </Col>
                <Col>
                    <Select
                        placeholder="All"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'Yiminghe' },
                        ]}
                        style={{ width: 150 }}
                    />
                </Col>
                <Col>
                    <Button icon={<TfiReload />} />
                </Col>
            </Row>
            <Divider></Divider>
            <Row gutter={[16, 16]}>
                {mockData.length > 0 &&
                    mockData[0].result.map(r => (
                        <Col
                            key={r.id}
                            xs={24}
                            sm={12}
                            md={8}
                            className="custom-col"
                        >
                            <RoomCard roomKey={r.id} room={r} />
                        </Col>
                    ))}
            </Row>
        </Content>
    );
};

export default MeetingRooms;
