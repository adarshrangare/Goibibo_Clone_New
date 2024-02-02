export function reducerFunction(state, action) {
  switch (action.type) {
    case "set_destination_location": {
      return { ...state, destination_location: action.payload.value };
    }
    case "set_source_location": {
      console.log("setting...");
      return { ...state, source_location: action.payload.value };
    }
    case "set_date_of_journey": {
        
      return { ...state, date_of_journey: action.payload.value };
    }

    case "swap_location": {
      const temp = state.source_location;

      return {
        ...state,
        source_location: state.destination_location,
        destination_location: temp,
      };
    }

    case "set_travel_details": {
      const { travel_details } = state;
      const { numbers } = travel_details;

      if (action.secondType == "increase") {
        numbers[action.target] += 1;

        travel_details.numbers = { ...numbers };
      } else if (action.secondType == "decrease") {
        numbers[action.target] -= 1;

        travel_details.numbers = { ...numbers };
      }

      return { ...state, travel_details };
    }

    default:
      return state;
  }
}


