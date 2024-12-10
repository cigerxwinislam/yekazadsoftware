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
          <span className={styles.nextjs}>Karel</span>
          <span className={styles.mongodb}>Fiber</span>
          <span className={styles.mongodb}>Elektronik</span>

        </h1>
        <Container justifyContent="center" className={styles.buttons}>
        <Alert style={{background:"#40FF40"}}> 
         
        
        <WhatsAppWidget message=" Whatsapptan Mesajınızı Yazın" inputPlaceHolder="Mesajınızı Yazın" replyTimeText="En kısa zamanda dönüş yapılacaktır" sendButtonText="Gönder" companyName="" phoneNumber="+905436840504" />

        </Alert>
  
        </Container>
        <p className={styles.subtitle}>
        </p>

      </div>
    </Wrapper>   
  );
};

export default Hero;
