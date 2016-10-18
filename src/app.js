import angular from "angular";

import Hello from "./components/Hello/Hello";

angular.module( "HerokuTest", [] )
	.directive( "hello", Hello );