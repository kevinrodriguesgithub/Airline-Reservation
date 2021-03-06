package com.lti.service.flight;

import java.util.List;

import com.lti.entity.flight.Flight;

public interface FlightService {
	Flight addFlight(Flight fly);

	List<Flight> getAllFlight();
	
	List<Flight> viewFlight(String from_loc,String to_loc);

	Flight deleteFlightByID(int id);
	
	List<Flight> searchFlight(Flight f);
}
