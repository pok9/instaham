import { useLocation } from 'react-router-dom'

import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import styles from './SidebarList.module.scss'
import HomeIcon from '../../common/icons/Sidebar/HomeIcon';
import SearchIcon from '../../common/icons/Sidebar/SearchIcon';
import MessengerIcon from '../../common/icons/Sidebar/MessengerIcon';
import HeartIcon from '../../common/icons/Sidebar/HeartIcon';
import PlusIcon from '../../common/icons/Sidebar/PlusIcon';
import Avatar from '../../common/Avatar';

export default function SidebarList() {

  const sidebarList: SidebarItemProps[] = [
    {
      icon: <HomeIcon />,
      name: "Home",
      to: "/"
    },
    {
      icon: <SearchIcon />,
      name: "Search",
      to: "/"
    },
    {
      icon: <MessengerIcon />,
      name: "Messages",
      to: "/direct/inbox/"
    },
    {
      icon: <HeartIcon />,
      name: "Notifications",
      to: "/"
    },
    {
      icon: <PlusIcon />,
      name: "Create",
      to: "/"
    },
    {
      icon: <Avatar size='tiny' />,
      name: "Profile",
      to: "/pok_chanchai9"
    },
  ]

  return (
    <div className={styles.container}>
      {
        sidebarList.map((sidebarItem: SidebarItemProps, index: number) => {
          return (
            <SidebarItem
              key={index}
              icon={<div>{sidebarItem.icon}</div>}
              name={sidebarItem.name}
              to={sidebarItem.to}
              isActive={false}
            />
          )
        })
      }

    </div>
  )
}
