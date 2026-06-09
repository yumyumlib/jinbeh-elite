import { Pool } from 'pg';

/**
 * Shared PostgreSQL connection pool for form submissions.
 *
 * The pool connects to the gov1_orchestrator database on the VPS PostgreSQL instance.
 * Environment variables control the connection — defaults match the Docker setup.
 *
 * NOTE: the prod container must share a Docker network with the postgres
 * container (`n8n_default`) and reach it by service name — the postgres port
 * is published only on the host loopback (127.0.0.1:5433), so the old
 * host.docker.internal:5433 path is refused from inside a container. Hence the
 * container-name default below.
 */

let pool: Pool | null = null;

export function getPool(): Pool {
    if (!pool) {
        pool = new Pool({
            host: process.env.PGHOST || 'n8n-postgres-1',
            port: parseInt(process.env.PGPORT || '5432', 10),
            user: process.env.PGUSER || 'gov1',
            password: process.env.PGPASSWORD || 'jinbeh_gov1_2026',
            database: process.env.PGDATABASE || 'gov1_orchestrator',
            max: 5,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 5000,
        });
    }
    return pool;
}
