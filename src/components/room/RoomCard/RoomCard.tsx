import React from 'react';
import { Content } from 'antd/es/layout/layout';
import type { mockDataType } from '@/config/mockData';
import { Card, Space, Typography } from 'antd';
import { MdOutlinePeople } from "react-icons/md";

interface RoomCardProps {
    roomKey: number;
    room: mockDataType;
}
const { Title } = Typography;
const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <Content className="px-2">
            <Card>
                <Space className="flex items-center justify-between !w-full">
                    <Title level={5}>{room.name}</Title>
                    <Space className="border px-2 rounded-full text-md border-[gray]">
                        {room.category}
                    </Space>
                </Space>
                <Space>
                    <Space className="bg-[gray] text-white px-2 rounded-full text-md mt-1">
                        ABC123
                    </Space>
                    <Space className="px-2 mt-1 text-white bg-black rounded-full text-md">
                        {room.category}
                    </Space>
                </Space>
                <Space className="mt-2 text-[gray]">{room.description}</Space>
                <Space className="flex mt-2 text-[12px]">
                    <MdOutlinePeople />
                    {room.participants.length}/{room.maxParticipants}
                </Space>
            </Card>
        </Content>
    );
};

export default RoomCard;
