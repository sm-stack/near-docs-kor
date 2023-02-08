"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(p,o(o({ref:t},l),{},{components:n})):r.createElement(p,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],d={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,s={unversionedId:"integrator/errors/introduction",id:"integrator/errors/introduction",title:"Introduction",description:"did you know?",source:"@site/../docs/6.integrator/errors/introduction.md",sourceDirName:"6.integrator/errors",slug:"/integrator/errors/introduction",permalink:"/near-docs-kor/vi/integrator/errors/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/errors/introduction.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"integrate",previous:{title:"Implicit Accounts",permalink:"/near-docs-kor/vi/integrator/implicit-accounts"},next:{title:"Source Code Survey",permalink:"/near-docs-kor/vi/integrator/errors/error-implementation"}},l={},u=[{value:"The life of a transaction:",id:"the-life-of-a-transaction",level:2},{value:"NEAR Platform Errors",id:"near-platform-errors",level:2},{value:"RuntimeError and subtypes",id:"runtimeerror-and-subtypes",level:3},{value:"TxExecutionError and subtypes",id:"txexecutionerror-and-subtypes",level:3},{value:"VMerror and subtypes",id:"vmerror-and-subtypes",level:3}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",{class:"info"},(0,i.kt)("strong",null,"did you know?"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/concepts/welcome"},"NEAR Platform overview")," clarifies much of the language in this section.")),(0,i.kt)("h2",{id:"the-life-of-a-transaction"},"The life of a transaction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A client creates a transaction, computes the transaction hash and signs this hash to get a signed transaction. Now this signed transaction can be sent to a node."),(0,i.kt)("li",{parentName:"ul"},"The RPC interface receives the transaction and routes it to the correct physical node using ",(0,i.kt)("inlineCode",{parentName:"li"},"signer_id"),".  Since the ",(0,i.kt)("inlineCode",{parentName:"li"},"signer_id")," must be a NEAR Account ID which lives on a single shard, the account is mapped to a shard which is followed by at least one validator running at least one machine with an IP address."),(0,i.kt)("li",{parentName:"ul"},"When a node receives a new signed transaction, it validates the transaction for signer, receiver, account balance, cost overflow, signature, etc. (",(0,i.kt)("a",{parentName:"li",href:"https://nomicon.io/RuntimeSpec/Scenarios/FinancialTransaction.html#transaction-to-receipt"},"see here"),") and gossips it to all peers following the same shard. If a transaction has an invalid signature or would be invalid on the latest state, it is rejected quickly and returns an error to the original RPC call. "),(0,i.kt)("li",{parentName:"ul"},"Valid transactions are added to the transaction pool (every validating node has its own independent copy of a transaction pool). The transaction pool maintains transactions that are not yet discarded and not yet included into the chain."),(0,i.kt)("li",{parentName:"ul"},"A pool iterator is used to pick transactions from the pool one at a time, ordered from the smallest nonce to largest, until the pool is drained or some chunk limit is reached (max number of transactions per chunk or max gas burnt per chunk to process transactions).  Please refer to articles on the ",(0,i.kt)("a",{parentName:"li",href:"https://nomicon.io/ChainSpec/Transactions.html?highlight=pool#pool-iterator"},"pool iterator")," and ",(0,i.kt)("a",{parentName:"li",href:"/concepts/basics/transactions/gas"},"gas")," for more details."),(0,i.kt)("li",{parentName:"ul"},"To accommodate the distributed nature of a sharded blockchain, all transactions are subsequently returned to a segmented transaction pool having 3 distinct layers: accepted transactions (which will be processed on the next chunk), pending transactions (which exceeded the limits of the current chunk and will be included in a later round of processing) and invalid transactions (which will be rejected at the next available opportunity)."),(0,i.kt)("li",{parentName:"ul"},"Before producing a chunk, transactions are ordered and validated again. This is done to produce chunks with only valid transactions across a distributed system."),(0,i.kt)("li",{parentName:"ul"},"While a transaction is being processed on to a chunk, any errors raised by the application of its actions are also returned via RPC.")),(0,i.kt)("h2",{id:"near-platform-errors"},"NEAR Platform Errors"),(0,i.kt)("p",null,"Errors raised by the NEAR platform are implemented in the following locations in ",(0,i.kt)("inlineCode",{parentName:"p"},"nearcore"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/blob/master/core/primitives/src/errors.rs"},"nearcore/core/primitives/src/errors.rs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/blob/master/runtime/near-vm-errors/src/lib.rs"},"nearcore/runtime/near-vm-errors/src/lib.rs"))),(0,i.kt)("p",null,"This page includes: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RuntimeError and subtypes"),": errors raised when a transaction is first received by the destination node and again before it's processed and applied to a chunk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TxExecutionError and subtypes"),": errors raised while a transaction and its component action(s) are being validated and applied to a chunk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VMerror and subtypes"),": errors raised during the execution of a Wasm contract by the NEAR VM")),(0,i.kt)("h3",{id:"runtimeerror-and-subtypes"},"RuntimeError and subtypes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"RuntimeError                                              Error returned from `Runtime::apply  \n  StorageError                                            Unexpected error which is typically related to the node storage corruption.account\n  BalanceMismatchError                                    An error happens if `check_balance` fails, which is likely an indication of an invalid state\n  InvalidTxError                                          An error happened during TX verification and account charging\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions    \n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n")),(0,i.kt)("h3",{id:"txexecutionerror-and-subtypes"},"TxExecutionError and subtypes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"TxExecutionError                                          Error returned in the ExecutionOutcome in case of failure\n  InvalidTxError                                          An error happened during Transaction execution\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions\n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n  ActionError                                             An error happened during Acton execution\n    ActionErrorKind                                       The kind of ActionError happened\n      RuntimeCallError \n      ReceiptValidationError                              Describes the error for validating a receipt\n        ActionsValidationError                            Describes the error for validating a list of actions    \n          TotalPrepaidGasExceeded                         The total prepaid gas (for all given actions) exceeded the limit.\n          TotalNumberOfActionsExceeded                    The number of actions exceeded the given limit.\n          AddKeyMethodNamesNumberOfBytesExceeded          The total number of bytes of the method names exceeded the limit in a Add Key action.\n          AddKeyMethodNameLengthExceeded                  The length of some method name exceeded the limit in a Add Key action.\n          IntegerOverflow                                 Integer overflow during a compute.\n          InvalidAccountId                                Invalid account ID.\n          ContractSizeExceeded                            The size of the contract code exceeded the limit in a DeployContract action.\n          FunctionCallMethodNameLengthExceeded            The length of the method name exceeded the limit in a Function Call action.\n          FunctionCallArgumentsLengthExceeded             The length of the arguments exceeded the limit in a Function Call action.\n")),(0,i.kt)("h3",{id:"vmerror-and-subtypes"},"VMerror and subtypes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"VMerror                                                   An error that occurs in the NEAR virtual machine\n  ExternalError                                           Serialized external error from External trait implementation\n  InconsistentStateError                                  An error that is caused by an operation on an inconsistent state (ie. an integer overflow by using a value from the given context\n    IntegerOverflow                                       Math operation with a value from the state resulted in a integer overflow\n  FunctionCallError \n    LinkError \n    WasmTrap \n    MethodResolveError \n      MethodEmptyName \n      MethodUTF8Error \n      MethodNotFound \n      MethodInvalidSignature \n    HostError \n      BadUTF16                                            String encoding is bad UTF-16 sequence\n      BadUTF8                                             String encoding is bad UTF-8 sequence\n      GasExceeded                                         Exceeded the prepaid ga\n      GasLimitExceeded                                    Exceeded the maximum amount of gas allowed to burn per contract\n      BalanceExceeded                                     Exceeded the account balance\n      EmptyMethodName                                     Tried to call an empty method nam\n      GuestPanic                                          Smart contract panicked\n      IntegerOverflow                                     IntegerOverflow happened during a contract execution\n      InvalidPromiseIndex                                 `promise_idx` does not correspond to existing promises\n      CannotAppendActionToJointPromise                    Actions can only be appended to non-joint promise.\n      CannotReturnJointPromise                            Returning joint promise is currently prohibited\n      InvalidPromiseResultIndex                           Accessed invalid promise result index\n      InvalidRegisterId                                   Accessed invalid register id\n      IteratorWasInvalidated                              Iterator `iterator_index` was invalidated after its creation by performing a mutable operation on trie\n      MemoryAccessViolation                               Accessed memory outside the bounds\n      InvalidReceiptIndex                                 VM Logic returned an invalid receipt index\n      InvalidIteratorIndex                                Iterator index `iterator_index` does not exist\n      InvalidAccountId                                    VM Logic returned an invalid account id\n      InvalidMethodName                                   VM Logic returned an invalid method name\n      InvalidPublicKey                                    VM Logic provided an invalid public key\n      ProhibitedInView                                    `method_name` is not allowed in view calls\n      NumberOfLogsExceeded                                The total number of logs will exceed the limit.\n      KeyLengthExceeded                                   The storage key length exceeded the limit.\n      ValueLengthExceeded                                 The storage value length exceeded the limit.\n      TotalLogLengthExceeded                              The total log length exceeded the limit.\n      NumberPromisesExceeded                              The maximum number of promises within a FunctionCall exceeded the limit.\n      NumberInputDataDependenciesExceeded                 The maximum number of input data dependencies exceeded the limit.\n      ReturnedValueLengthExceeded                         The returned value length exceeded the limit.\n      ContractSizeExceeded                                The contract size for DeployContract action exceeded the limit.\n    CompilationError \n      CodeDoesNotExist \n      WasmerCompileError \n      PrepareError                                        Error that can occur while preparing or executing Wasm smart-contract\n        Serialization                                     Error happened while serializing the module\n        Deserialization                                   Error happened while deserializing the module\n        InternalMemoryDeclared                            Internal memory declaration has been found in the module\n        GasInstrumentation                                Gas instrumentation failed.  This most likely indicates the module isn't valid\n        StackHeightInstrumentation                        Stack instrumentation failed.  This  most likely indicates the module isn't valid\n        Instantiate                                       Error happened during instantiation.  This might indicate that `start` function trapped, or module isn't instantiable and/or unlinkable\n        Memory                                            Error creating memory\n")),(0,i.kt)("admonition",{title:"Got a question?",type:"tip"},(0,i.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,i.kt)("h8",null,"Ask it on StackOverflow!"))))}m.isMDXComponent=!0}}]);