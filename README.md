Report on lab 9 from Rishat Rizvanov
===
## First round
```
rs0:PRIMARY> rs.status()
{
        "set" : "rs0",
        "date" : ISODate("2019-11-01T20:24:35.835Z"),
        "myState" : 1,
        "term" : NumberLong(2),
        "syncingTo" : "",
        "syncSourceHost" : "",
        "syncSourceId" : -1,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1572639867, 1),
                        "t" : NumberLong(2)
                },
                "lastCommittedWallTime" : ISODate("2019-11-01T20:24:27.964Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1572639867, 1),
                        "t" : NumberLong(2)
                },
                "readConcernMajorityWallTime" : ISODate("2019-11-01T20:24:27.964Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1572639867, 1),
                        "t" : NumberLong(2)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1572639867, 1),
                        "t" : NumberLong(2)
                },
                "lastAppliedWallTime" : ISODate("2019-11-01T20:24:27.964Z"),
                "lastDurableWallTime" : ISODate("2019-11-01T20:24:27.964Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1572639827, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1572639827, 1),
        "electionCandidateMetrics" : {
                "lastElectionReason" : "stepUpRequestSkipDryRun",
                "lastElectionDate" : ISODate("2019-11-01T17:35:47.034Z"),
                "termAtElection" : NumberLong(2),
                "lastCommittedOpTimeAtElection" : {
                        "ts" : Timestamp(1572629746, 1),
                        "t" : NumberLong(1)
                },
                "lastSeenOpTimeAtElection" : {
                        "ts" : Timestamp(1572629746, 1),
                        "t" : NumberLong(1)
                },
                "numVotesNeeded" : 2,
                "priorityAtElection" : 1,
                "electionTimeoutMillis" : NumberLong(10000),
                "priorPrimaryMemberId" : 0,
                "numCatchUpOps" : NumberLong(27017),
                "newTermStartDate" : ISODate("2019-11-01T17:35:47.680Z"),
                "wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T17:35:48.666Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mongo0.domain.net:27017",
                        "ip" : "172.31.35.98",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 10116,
                        "optime" : {
                                "ts" : Timestamp(1572639867, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572639867, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:24:27Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:24:27Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:24:34.674Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:24:34.097Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo2.domain.net:27017",
                        "syncSourceHost" : "mongo2.domain.net:27017",
                        "syncSourceId" : 1,
                        "infoMessage" : "",
                        "configVersion" : 1
                },
                {
                        "_id" : 1,
                        "name" : "mongo2.domain.net:27017",
                        "ip" : "172.31.14.209",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 10220,
                        "optime" : {
                                "ts" : Timestamp(1572639867, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:24:27Z"),
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "electionTime" : Timestamp(1572629747, 1),
                        "electionDate" : ISODate("2019-11-01T17:35:47Z"),
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 2,
                        "name" : "mongo3.domain.net:27017",
                        "ip" : "172.31.8.172",
                        "health" : 0,
                        "state" : 8,
                        "stateStr" : "SECONDARY",
                        "uptime" : 10116,
                        "optime" : {
                                "ts" : Timestamp(1572639874, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572639874, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:24:23Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:24:23Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:24:35.425Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:24:36.525Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo2.domain.net:27017",
                        "syncSourceHost" : "mongo2.domain.net:27017",
                        "syncSourceId" : 1,
                        "infoMessage" : "",
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1572639867, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1572639867, 1)
}
```
```
rs0:PRIMARY> rs.config()
{
        "_id" : "rs0",
        "version" : 1,
        "protocolVersion" : NumberLong(1),
        "writeConcernMajorityJournalDefault" : true,
        "members" : [
                {
                        "_id" : 0,
                        "host" : "mongo0.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 1,
                        "host" : "mongo2.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 2,
                        "host" : "mongo3.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                }
        ],
        "settings" : {
                "chainingAllowed" : true,
                "heartbeatIntervalMillis" : 2000,
                "heartbeatTimeoutSecs" : 10,
                "electionTimeoutMillis" : 10000,
                "catchUpTimeoutMillis" : -1,
                "catchUpTakeoverDelayMillis" : 30000,
                "getLastErrorModes" : {

                },
                "getLastErrorDefaults" : {
                        "w" : 1,
                        "wtimeout" : 0
                },
                "replicaSetId" : ObjectId("5dbc6caa8ed2e3c3055af7c2")
        }
}
```
![](https://i.imgur.com/fktXHP9.png)

## 2nd try
```
rs0:PRIMARY> rs.status()
{
        "set" : "rs0",
        "date" : ISODate("2019-11-01T20:41:39.528Z"),
        "myState" : 1,
        "term" : NumberLong(5),
        "syncingTo" : "",
        "syncSourceHost" : "",
        "syncSourceId" : -1,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "lastCommittedWallTime" : ISODate("2019-11-01T20:41:32.085Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "readConcernMajorityWallTime" : ISODate("2019-11-01T20:41:32.085Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "lastAppliedWallTime" : ISODate("2019-11-01T20:41:32.085Z"),
                "lastDurableWallTime" : ISODate("2019-11-01T20:41:32.085Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1572640862, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1572640862, 1),
        "electionCandidateMetrics" : {
                "lastElectionReason" : "electionTimeout",
                "lastElectionDate" : ISODate("2019-11-01T20:40:11.944Z"),
                "termAtElection" : NumberLong(5),
                "lastCommittedOpTimeAtElection" : {
                        "ts" : Timestamp(1572640777, 1),
                        "t" : NumberLong(4)
                },
                "lastSeenOpTimeAtElection" : {
                        "ts" : Timestamp(1572640787, 1),
                        "t" : NumberLong(4)
                },
                "numVotesNeeded" : 2,
                "priorityAtElection" : 1,
                "electionTimeoutMillis" : NumberLong(10000),
                "numCatchUpOps" : NumberLong(27017),
                "newTermStartDate" : ISODate("2019-11-01T20:40:22.082Z"),
                "wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T20:40:22.687Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mongo0.domain.net:27017",
                        "ip" : "172.31.35.98",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 11143,
                        "optime" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:41:32Z"),
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "could not find member to sync from",
                        "electionTime" : Timestamp(1572640811, 1),
                        "electionDate" : ISODate("2019-11-01T20:40:11Z"),
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 1,
                        "name" : "mongo2.domain.net:27017",
                        "ip" : "172.31.14.209",
                        "health" : 0,
                        "state" : 8,
                        "stateStr" : "(not reachable/healthy)",
                        "uptime" : 0,
                        "optime" : {
                                "ts" : Timestamp(0, 0),
                                "t" : NumberLong(-1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(0, 0),
                                "t" : NumberLong(-1)
                        },
                        "optimeDate" : ISODate("1970-01-01T00:00:00Z"),
                        "optimeDurableDate" : ISODate("1970-01-01T00:00:00Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:41:33.849Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:33:48.979Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "Couldn't get a connection within the time limit",
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "configVersion" : -1
                },
                {
                        "_id" : 2,
                        "name" : "mongo3.domain.net:27017",
                        "ip" : "172.31.8.172",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 96,
                        "optime" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:41:32Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:41:32Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:41:37.997Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:41:38.755Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo0.domain.net:27017",
                        "syncSourceHost" : "mongo0.domain.net:27017",
                        "syncSourceId" : 0,
                        "infoMessage" : "",
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1572640892, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1572640892, 1)
}
```
```
rs0:PRIMARY> rs.config()
{
        "_id" : "rs0",
        "version" : 1,
        "protocolVersion" : NumberLong(1),
        "writeConcernMajorityJournalDefault" : true,
        "members" : [
                {
                        "_id" : 0,
                        "host" : "mongo0.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 1,
                        "host" : "mongo2.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 2,
                        "host" : "mongo3.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                }
        ],
        "settings" : {
                "chainingAllowed" : true,
                "heartbeatIntervalMillis" : 2000,
                "heartbeatTimeoutSecs" : 10,
                "electionTimeoutMillis" : 10000,
                "catchUpTimeoutMillis" : -1,
                "catchUpTakeoverDelayMillis" : 30000,
                "getLastErrorModes" : {

                },
                "getLastErrorDefaults" : {
                        "w" : 1,
                        "wtimeout" : 0
                },
                "replicaSetId" : ObjectId("5dbc6caa8ed2e3c3055af7c2")
        }
}
```
![](https://i.imgur.com/mSb70RY.png)
