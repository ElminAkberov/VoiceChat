import React from 'react';
import { mockData } from '@/config/mockData';
import { Content } from 'antd/es/layout/layout';
import RoomCard from '@/components/room/RoomCard';
import { Col, Row } from 'antd';

const MeetingRooms: React.FC = () => {
    return (
        <Content>
            <Row gutter={[16, 16]}>
                {mockData.length > 0 &&
                    mockData.map(r => (
                        <Col key={r.id} span={6}>
                            <RoomCard roomKey={r.id} room={r} />
                        </Col>
                    ))}
            </Row>
        </Content>
    );
};

export default MeetingRooms;
