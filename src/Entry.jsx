import React from "react";
import {
    Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";

function Entry() {
  return (
    <Container>
      <Header as={"h1"}>Budged </Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>1500</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label syle={{ textAlign: "left" }}>
                  Income :
                </Statistic.Label>
                <Statistic.Value>1500.00</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label syle={{ textAlign: "left" }}>
                  Expenses :
                </Statistic.Label>
                <Statistic.Value>150.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10rs
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit"></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10rs
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit"></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10rs
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit"></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            placeholder="new shiny thing"
            label="Description"
            icon="tag"
            width={12}
          />
          <Form.Input
            placeholder="100"
            label="Value"
                      icon="dollar"
                      iconPosition="left"
            width={4}
                  />
                  <Button.Group style={{marginTop : 20}}>
                      <Button>Cancel</Button>
                      <Button.Or />
                      <Button primary>Ok</Button>
                  </Button.Group>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Entry;