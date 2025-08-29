import React from 'react';
import type { Results } from '@/config/mockData';
import { Avatar, Button, Card, Space, Typography } from 'antd';

import { CiTimer } from 'react-icons/ci';
import { MdOutlinePeople } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';

interface RoomCardProps {
    roomKey: number;
    room: Results;
}
const { Title, Text } = Typography;

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <Card>
            <Space className="flex items-center justify-between !w-full">
                <Title level={5}>{room.name}</Title>
                <Space className="border px-2 py-1 rounded-full text-md border-[gray] ">
                    {room.category}
                </Space>
            </Space>
            <Space>
                <Space className="bg-[gray] py-1 text-white px-2 rounded-full text-md mt-1">
                    ABC123
                </Space>
                <Space className="px-2 py-1 mt-1 text-white bg-black rounded-full text-md capitalize">
                    {room.status}
                </Space>
            </Space>

            <Text className="py-2 !text-[#474040] block ">
                {room.description}
            </Text>

            <Space className="!flex mt-2 text-[13px] gap-x-1" size={0}>
                <MdOutlinePeople size={20} />
                <Text>
                    {room.participants.length}/{room.maxParticipants}
                </Text>
            </Space>

            <Avatar.Group className="mt-2">
                {room.participants.map(item => (
                    <Avatar key={item.id} src={item.avatar}></Avatar>
                ))}
            </Avatar.Group>

            <Space className="mt-2 !flex">
                <CiTimer size={15} strokeWidth={1} />
                <Text className="!text-[12px]">{room.lastActivity}</Text>
            </Space>

            <Button
                icon={<FaArrowRight />}
                iconPosition="end"
                className="!w-full !bg-black !text-white mt-3"
            >
                Join Room
            </Button>
        </Card>
    );
};

export default RoomCard;
