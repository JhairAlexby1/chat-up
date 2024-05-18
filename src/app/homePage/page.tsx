import { ConnectedPeople } from '@/components/connectedPeople/ConnectedPeople';
import styles from './homePage.module.css'; 

export default function HomePage() {
    return (
        <div className={styles.containerHome}>
            <ConnectedPeople />
        </div>
    )
}
