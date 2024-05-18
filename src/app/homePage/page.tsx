import { ConnectedPeople } from '@/components/connectedPeople/ConnectedPeople';
import styles from './homePage.module.css'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: " Home Page",
    description: "Home Page Description",
  };
  

export default function HomePage() {
    return (
        <div className={styles.containerHome}>
            <ConnectedPeople />
        </div>
    )
}
