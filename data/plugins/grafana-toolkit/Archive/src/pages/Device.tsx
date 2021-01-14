import React, { FC, ReactElement, useState } from 'react';
import {  Drawer  } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import { AddDevice } from './addNewDevice/addDevice';
import { ListView } from './listview/listview';
import './styles.less';

export const Device: FC<DeviceProps> = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="listview-container">
        {/* <div className="titlebar">
          <h1>Devices</h1>
          <Divider />
        </div> */}
        {/* <div className="create-button">
          <Tooltip title='Create'>
            <span>
              <Button type="primary" onClick={toggleDrawer} className="listViewButton">
                <PlusOutlined /><Typography.Text className='create-text'>Create</Typography.Text>
              </Button>
            </span>
          </Tooltip>
        </div> */}
        <Drawer
          placement="right"
          width="400px"
          closable={true}
          onClose={toggleDrawer}
          visible={visible}
        >
          <AddDevice />
        </Drawer>
        <ListView />
      </div>
    </>
  );
};

type DeviceProps = {

};
