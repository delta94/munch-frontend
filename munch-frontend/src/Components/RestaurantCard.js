import React from "react"


class RestaurantCard extends React.Component{

  state = {
    date: "2020-11-13",
    time: "19:00",
    guests: "2"
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  searchHandler = (e) => {
    e.preventDefault()

    
    }
  



  render() {

    const restaurant = this.props.restaurant.restaurant


    return(
        <>
                <div key={restaurant.id}>
                    <img src={restaurant.photo_url} alt={restaurant.name}/>
                    <h2>{restaurant.name}</h2>
                    <h4>{restaurant.cuisines}</h4>
                    <p>{restaurant.location.address}</p>

                    <form className="reservation" onSubmit={this.submitHandler}>
                    <label for="reservation_date">Reservation Date:</label>
                    <input type="date" id="reservation-date" name="date" value={this.state.date} onChange={this.changeHandler} />
                    <label for="reservation_time">Reservation Time:</label>
                    <input type="time" id="reservation-time" name="time"  min="12:00" max="22:00" step="900" value={this.state.time} onChange={this.changeHandler}/>
                    <label>
                    Guests:
                    <select name="guests" value={this.state.guests} onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </label>
                    <input type="submit" value="Make Reservation" />
                    </form>
                    <br/>
                    <br/>

                </div>
              </>
            )}




}






export default RestaurantCard