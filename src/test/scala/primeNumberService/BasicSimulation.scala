package primeNumberService

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.util.Random

class BasicSimulation extends Simulation {

  val httpConf = http
    .baseURL("http://35.227.180.155") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  def getRandomNumber() = {
    Map("randomNumber" -> Random.nextInt(10000))
  }

  val feeder = Iterator.continually(getRandomNumber)

  val scn = scenario("basic get prime numbers")
      .during(5 minutes, "counter", false){
        feed(feeder)
          .exec(http("get pirme numbers less than random")
            .get("/primeNumbers?num=${randomNumber}"))
          .pause(1)
      }


  setUp(scn.inject(rampUsers(200) over (1 minutes)).protocols(httpConf))

}