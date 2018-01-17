var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36739",
        "ok": "36739",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5069",
        "ok": "5069",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2341",
        "ok": "2341",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2996",
        "ok": "2995",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27727,
        "percentage": 75
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2494,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6518,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "101.77",
        "ok": "101.77",
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
        "total": "36739",
        "ok": "36739",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5069",
        "ok": "5069",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2341",
        "ok": "2341",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2996",
        "ok": "2996",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27727,
        "percentage": 75
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2494,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6518,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "101.77",
        "ok": "101.77",
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
