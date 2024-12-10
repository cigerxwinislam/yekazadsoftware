// Bismillahirahmanirahim



import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import { Alert } from 'react-bootstrap';
const Hero = () => {
  return (
    <Wrapper>
      <div style={{backgroundImage:
                "url('https://www.98elektronik.com/wp-content/uploads/2020/11/fiber-98-elektronik-768x416.jpg')",
           
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
        <h1 className={styles.title}>
          <span className={styles.mongodb}>Yekazad</span>
          <span className={styles.nextjs}>Software</span>
          <span className={styles.mongodb}>Center</span>

        </h1>
        <Container justifyContent="center" className={styles.buttons}>
        <Alert style={{background:"#40FF40"}}> 
         
        
        <WhatsAppWidget message="Send your message through whatsapp" inputPlaceHolder="Type your message" replyTimeText="You will be answered as soon as possible " sendButtonText="Send" companyName="" phoneNumber="+905549765692" />

        </Alert>
  
        </Container>
        <p className={styles.subtitle}>
        </p>

      </div>
    </Wrapper>   
  );
};

export default Hero;
