var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29917",
        "ok": "29917",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3828",
        "ok": "3828",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1011",
        "ok": "1011",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "percentiles1": {
        "total": "670",
        "ok": "670",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1596",
        "ok": "1596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2783",
        "ok": "2783",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3194",
        "ok": "3194",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16310,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3385,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10222,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "82.873",
        "ok": "82.873",
        "ko": "-"
    }
},
contents: {
"req_get-pirme-numbe-07109": {
        type: "REQUEST",
        name: "get pirme numbers less than random",
path: "get pirme numbers less than random",
pathFormatted: "req_get-pirme-numbe-07109",
stats: {
    "name": "get pirme numbers less than random",
    "numberOfRequests": {
        "total": "29917",
        "ok": "29917",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3828",
        "ok": "3828",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1011",
        "ok": "1011",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "percentiles1": {
        "total": "670",
        "ok": "670",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1596",
        "ok": "1596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2783",
        "ok": "2783",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3194",
        "ok": "3194",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16310,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3385,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10222,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "82.873",
        "ok": "82.873",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
