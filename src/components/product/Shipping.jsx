import { useState } from 'react';
import api from "../../api";
import { useNavigate } from 'react-router-dom';
import styles from './ShippingForm.module.css'; // Import the CSS module
import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ShippingForm = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        // postal_code: '',
        // country: ''
    });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/api/shipping/', shippingInfo)
            .then(response => {
                console.log('Shipping info saved', response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error saving the shipping info!', error);
            });
    };

    return (
        <Container className={styles.container}>
            <Card className={styles.card}>
                <CardBody>
                    <h3 className="text-center">Shipping Information</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="address_line1">Address 1</Label>
                            <Input
                                type="text"
                                name="address_line1"
                                id="address_line1"
                                placeholder="Enter Address Line 1"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address_line2">Address 2</Label>
                            <Input
                                type="text"
                                name="address_line2"
                                id="address_line2"
                                placeholder="Enter Address Line 2"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Enter City"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                                type="text"
                                name="state"
                                id="state"
                                placeholder="Enter State"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="postal_code">Postal Code</Label>
                            <Input
                                type="text"
                                name="postal_code"
                                id="postal_code"
                                placeholder="Enter Postal Code"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Enter Country"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup> */}
                        <Button type="submit" color="primary" block>
                            Save Shipping Info
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default ShippingForm;