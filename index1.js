[package]
name = "spl-associated-token-account"
version = "1.0.5"
description = "Solana Program Library Associated Token Account"
authors = ["Solana Maintainers <maintainers@solana.foundation>"]
repository = "https://github.com/solana-labs/solana-program-library"
license = "Apache-2.0"
edition = "2018"

[features]
no-entrypoint = []
test-bpf = []

[dependencies]
assert_matches = "1.5.0"
borsh = "0.9.1"
num-derive = "0.3"
num-traits = "0.2"
solana-program = "1.9.9"
spl-token = { version = "3.3", path = "../../token/program", features = ["no-entrypoint"] }
spl-token-2022 = { version = "0.2", path = "../../token/program-2022", features = ["no-entrypoint"] }
thiserror = "1.0"

[dev-dependencies]
solana-program-test = "1.9.9"
solana-sdk = "1.9.9"

[lib]
crate-type = ["cdylib", "lib"]

[package.metadata.docs.rs]
targets = ["x86_64-unknown-linux-gnu"]
