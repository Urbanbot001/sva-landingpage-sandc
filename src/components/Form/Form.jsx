import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'; // Import CSS module

const Form = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = (event) => {
    const selectedPage = event.target.value;
    if (selectedPage === "SeekersPage") {
      navigate('/seekerspage'); // Navigate to the seekers page
    } else if (selectedPage === "ExpertsPage") {
      navigate('/expertspage'); // Navigate to the experts page
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSection}>
          Be Among The First To Experience Our Transformative Wellness Platform.
          <div className={styles.logo}>
            <img src="Group.png" alt="Svoveda Logo" className={styles.logoImage} />
            <img src="Group2.png" alt="Svoveda Logo"className={styles.logoText} />
          </div>
        </div>
        <form className={styles.rightSection}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea rows="4" placeholder="Message" className={styles.textArea}></textarea>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="role"
                value="SeekersPage"
                onClick={handleRoleChange} // Call the handleRoleChange function
              />
              Seekers
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="role"
                value="ExpertsPage"
                onClick={handleRoleChange} // Call the handleRoleChange function
              />
              Experts
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
